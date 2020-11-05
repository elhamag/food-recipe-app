"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          name: "Stew Recipes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Recipes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rice Recipes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eggplant Recipes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};