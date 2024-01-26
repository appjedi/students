const Sequelize = require('sequelize');
require('dotenv').config();




const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );

module.exports = sequelize;
// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//    "melting_pot", "root","1234",
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     },
//   );
// }

// module.exports = sequelize;
