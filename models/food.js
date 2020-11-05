'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsTo(models.User, { foreignKey: "userId" });
      Food.belongsToMany(models.Recipe, {
        through: "RecipeFood",
        foreignKey: "foodId",
        otherKey: "recipeId",
      });  
    }
  };
  Food.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    servingSize: DataTypes.STRING,
    ingredient: DataTypes.STRING,
    cookTime: DataTypes.STRING,
    preparation: DataTypes.STRING,
    direction: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};