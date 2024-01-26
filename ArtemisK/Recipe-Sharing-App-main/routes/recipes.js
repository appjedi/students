const express = require('express');//import express and create router
const router = express.Router();
const { models } = require('../models');
// define routes for recipes


router.get('/', async (req, res) => { //this route gets all recipes
  const data = await models.Recipe.findAll();
  res.send('Get all recipes', data);
});

router.get('/:id', (req, res) => { //this route will get a recipe based on the ID
  const recipeId = req.params.id;
  res.send(`Get recipe with ID ${recipeId}`);
});

router.post('/', (req, res) => {
  res.send('Create a new recipe');
});

router.put('/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send(`Update recipe with ID ${recipeId}`);
});

router.delete('/:id', (req, res) => { //DELETE a recipe based on id
  const recipeId = req.params.id;
  res.send(`Delete recipe with ID ${recipeId}`);
});

module.exports = router;
