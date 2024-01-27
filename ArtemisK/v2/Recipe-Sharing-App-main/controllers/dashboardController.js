const { Recipe } = require('../models'); //importing reciple model in models folder

const dashboardController = { //here we're creating a controller object to handle the dashboard functionaloty 
  display: async (req, res) => { //estblish the disply function for dashboard
    try { //error handling block
      // Fetch all recipes from the database
      const recipes = await Recipe.findAll({ raw: true });
      console.log("recipes", recipes)
      // Render the dashboard view with  list of recipes
      res.render('dashboard', { recipes });
    } catch (error) {
      console.error(error); //if there's an error log it
      res.status(500).send('Error'); //send this error message to user
    }
  },
};

module.exports = dashboardController;

//here we're defining the display function. taking code from out db and displaying it so the user can see it on their dashbaord
