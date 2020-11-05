'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsToMany(models.Food, {
        through: "RecipeFood",
        foreignKey: "recipeId",
        otherKey: "foodId",
      });
    }
  }
  Recipe.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};