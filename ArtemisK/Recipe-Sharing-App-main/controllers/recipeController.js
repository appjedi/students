const express = require('express');
const router = express.Router();
const models = require('../models');
console.log('models', models)
// Define routes for recipe functions
router.get('/recipes', async (req, res) => {

  const data = await models.Recipe.findAll();
  res.send(data);
  // get and display recipe
});

router.post('/recipes', async (req, res) => { //create new recipe
  const recipe = {
    title: req.body.title
  }
  const result = await models.Recipe.create(recipe);

  res.send({ status: 1, message: "Recipe Created", result: result });
});

module.exports = router;
