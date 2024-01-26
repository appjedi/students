const { Sequelize } = require('sequelize');
const sequelize = require ("../config/connection")
const RecipeModel = require('./recipe');
const DashboardModel = require('./dashboard');
const UserModel = require('./user');

// const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: 'mysql',
//     port: 3306,
// });

const Recipe = RecipeModel(sequelize);
const Dashboard = DashboardModel(sequelize);
const User = UserModel(sequelize);

module.exports = {
    Recipe,
    Dashboard,
    User,
    sequelize
};
