const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Dashboard = sequelize.define('Dashboard', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Add other fields as needed
  });

  return Dashboard;
};

