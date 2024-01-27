//this file will ensure that only authorized users can access the dashboard with recipes, etc
const authMiddleware = (req, res, next) => {
  // Check if the user is authorixed
  if (req.session && req.session.userId) {
    return next();
  } else {
    // if user is not authenticated redirect them to the login page
    res.redirect('/user/login');
  }
};

module.exports = authMiddleware;
