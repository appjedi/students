//import Express and create express router
const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware'); // Import authMiddleware
const authController = require('../controllers/authController');
// const authController = require('./controllers/authController.js');
const Dashboard = require('../models/dashboard');//import models/Dashboard
const models = require('../models')
// routes for dashboard, this will fetch data and render the dashboard
router.get('/test', async (req, res) => {
  const recipes = await models.Recipe.findAll();
  res.render('dashboard', { recipes: recipes });
});

router.get('/', authMiddleware, dashController.display)

//router.get('/auth', authController.login )

module.exports = router;

