const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
// User route for registering
router.post('/register', userController.register);
router.get('/register', (req, res) => {
    console.log("get register")
    res.render("register");
});
router.get('/login', (req, res) => {
    console.log("get login")
    res.render("login");
})
router.post('/login', authController.login);
// User route for profile
router.get('/profile', userController.getUserData);

module.exports = router;
