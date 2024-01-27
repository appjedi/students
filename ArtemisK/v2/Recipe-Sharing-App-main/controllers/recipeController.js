const express = require('express');
const router = express.Router();
const { Recipe } = require('../models');

const recipeController = {
  getRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.findAll();
      res.send(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },
  getRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await Recipe.findByPk(id);
      res.send(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },
  // 
  postRecipe: async (req, res) => {
    try {
      // this is for a form where users can fill out with title, ingredients, and instructions
      const { title, ingredients, instructions } = req.body;

      // this is for creating a new recipe in the db
      const newRecipe = await Recipe.create({
        title,
        ingredients,
        instructions,
      });
      const recipes = await Recipe.findAll({ raw: true });
      res.send({ status: 200, message: "Recipe Added", recipes: recipes });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 500, message: "Error adding", recipes: null });
    }
  },
  putRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      // this is for a form where users can fill out with title, ingredients, and instructions
      const { title, ingredients, instructions } = req.body;
      await Recipe.update({ title: title, ingredients: ingredients, instructions: instructions }, {
        where: {
          id: id,
        },
      });
      // this is for creating a new recipe in the db

      const recipes = await Recipe.findAll({ raw: true });
      res.send({ status: 200, message: "Recipe Updated", recipes: recipes });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 500, message: "Error saving", recipes: null });
    }
  }
}
// Defining routes for recipe functions


module.exports = recipeController;

// const express = require('express');
// const router = express.Router();
// const {Recipe} = require('../models') //not sure if this is right
// const models = require('../models');

// // Define routes for recipe functions
// router.get('/recipes', async (req, res) => {
//   console.log("models", models);
//   const data = await models.Recipe.findAll();
//   // get and display recipe
//   res.send(data);
// });

// router.post('/recipes',async (req, res) => { //create new recipe
//   const data ={
//     title:req.body.title
//   };
//   const resp=await models.Recipe.create(data);

//   res.send({status:1, message:"Recipe created", response:resp});
// });

// module.exports = router;