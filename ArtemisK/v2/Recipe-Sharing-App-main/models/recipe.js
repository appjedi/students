
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Recipe;
};



// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// router.get('/search', async (req, res) => {
//     try {
//         const query = req.query.q; 
//         const apiKey = process.env.SPOONACULAR_API_KEY;
//         const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
        
//         const response = await axios.get(url);
//         res.json(response.data); 
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while fetching recipes');
//     }
// });

// module.exports = router;
