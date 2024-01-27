const express = require('express');//import express and create router
const router = express.Router();
const controller = require('../controllers/recipeController');
// define routes for recipes

router.get('/', controller.getRecipes);

router.post('/', controller.postRecipe);

router.get('/:id', controller.getRecipe);

router.put('/:id', controller.putRecipe);

router.delete('/:id', (req, res) => { //DELETE a recipe based on id
  const recipeId = req.params.id;
  res.send(`Delete recipe with ID ${recipeId}`);
});

module.exports = router;
