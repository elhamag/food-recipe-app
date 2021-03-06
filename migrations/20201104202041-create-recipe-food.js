'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RecipeFoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
  },
  {
    uniqueKeys: {
      actions_unique: {
        fields: ["foodId", "recipeId"],
      },
    },
  }
);
},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RecipeFoods');
  }
};