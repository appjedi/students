// entry point for server
// import our modules
const express = require('express');
// const { sequelize } = require('./models');
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars');
const session = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const routes = require('./controllers/recipeController');
const dashboardRoutes = require('./routes/dashboardRoutes'); // Replace with your actual dashboard routes
const recipeRoutes = require('./routes/recipes.js');// Spoonacular API Routing
const PORT = process.env.PORT || 3001;
const apiKey = process.env.SPOONACULAR_API_KEY;


require('dotenv').config();

const app = express();

// Set up Handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
}));

// Serve static files from the public directory
app.use(express.static('public'));

app.use(routes);

// use authMiddleware to protect the dashboard route
app.use('/dashboard', authMiddleware, dashboardRoutes);

app.use('/api/recipes', recipeRoutes);

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});


