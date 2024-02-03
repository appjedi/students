const bcrypt = require('bcrypt'); // bcrypt is for hashing passwords, making them more secure
const { User } = require('../models');
// NodeSequelizeBcryptHandlebars
const authController = {
  // Defining the login function
  login: async (req, res) => {
    const { username, password } = req.body;
    console.log("login:", username);
    try {
      // Search for the user in the database to see if they exist
      const user = await User.findOne({ where: { username } });

      // If the user is found in the database and the password is correct
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user.id; // Store the user info for the session
        res.redirect('/dashboard'); // Redirect them to the main page with the recipes
      } else {
        // If the user is not found in the database or the password is incorrect
        res.render('login', { error: 'Invalid username or password' }); // Render this message
      }
    } catch (error) {
      // Log the error in the console
      console.error(error);
      res.status(500).send('Error');
    }
  },

  // Defining the signup function
  signup: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Check if the username is already taken
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.render('signup', { error: 'Username already in use' });
      }

      // Hash the password before storing it in the database
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Creating a new user
      const newUser = await User.create({ username, email, password: hashedPassword });

      // Redirect them to the login page
      res.redirect('/login');
    } catch (error) {
      // Log the error in the console
      console.error(error);
      res.status(500).send('Error');
    }
  },

  // Defining the logout function
  logout: (req, res) => {
    // When the user presses 'logout', the session is destroyed
    req.session.destroy((err) => {
      res.redirect('/login');
    });
  },
};


/*\
display: ...
list_of_categories = ... 
...
res.render("./views/dashboard.js", {listOfCategories:list_of_categories })
*/

module.exports = authController;
