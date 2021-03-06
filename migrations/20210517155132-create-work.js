'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('works', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      yearCreated: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      imageFile: {
        type: Sequelize.STRING
      },
      discipline: {
        type: Sequelize.STRING
      },
      artistId:{
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('works');
  }
};