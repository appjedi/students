const express = require('express');
const router = express.Router();
const models = require('../models');
console.log('models', models)
// Define routes for recipe functions
router.get('/recipes', async (req, res) => {
  console.log("ctrl recipes")
  const data = await models.Recipe.findAll();
  res.send(data);
  // get and display recipe
});
router.get('/recipe', async (req, res) => {
  const data = await models.Recipe.findAll({ raw: true });
  console.log("RECIPES:", data)
  res.render("recipe", { test: "TEST", date: new Date(), recipes: data })
  // get and display recipe
});
router.post('/recipes', async (req, res) => { //create new recipe
  console.log("REQ", req['body'])
  const recipe = {
    title: req.body.title
  }
  console.log("recipe", recipe);
  const result = await models.Recipe.create(recipe);

  res.send({ status: 1, message: "Recipe Created", result: result });
});

module.exports = router;
