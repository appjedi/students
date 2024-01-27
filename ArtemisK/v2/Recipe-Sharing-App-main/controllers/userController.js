// const db = require('../models');
// const passport = require('passport');

const { User } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
  // this is for registering a new user
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // first we need to check if the username is already in use
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.render('signup', { error: 'Username already in use' });
      }

      // Hash the password for security before storing it in the database (is this necessary?)
      const hashedPassword = bcrypt.hashSync(password, 10);

      // now we can create a new user 
      const newUser = await User.create({ username, email, password: hashedPassword });

      // now the new user can be redirected them to the login page
      res.redirect('/user/login');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },

  // Fetch user data...
  getUserData: async (req, res) => {
    try {
      const userId = req.session.userId;

      // Check if the user is authenticated
      if (!userId) {
        return res.status(401).send('Unauthorized');
      }

      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }, // Exclude password from the response
      });// get user data from the database


      res.render('profile', { user });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    } //// Render user profile page 
  },


};

module.exports = userController;
