const express = require('express');
const router = express.Router();
const recipeModel = require('../models/recipe');

// Define routes for recipe functions
router.get('/recipes', (req, res) => {
  // get and display recipe
});

router.post('/recipes', (req, res) => { //create new recipe
});

module.exports = router;
