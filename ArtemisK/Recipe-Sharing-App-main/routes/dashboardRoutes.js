//import Express and create express router
const express = require('express');
const router = express.Router();

const Dashboard = require('../models/dashboard');//import models/Dashboard

// routes for dashboard, this will fetch data and render the dashboard
router.get('/', (req, res) => {
  console.log("dashboard");
  res.render('dashboard');
});

module.exports = router;
