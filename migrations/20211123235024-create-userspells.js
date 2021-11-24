'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userspells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      level: {
        type: Sequelize.INTEGER
      },
      school: {
        type: Sequelize.TEXT
      },
      castingtime: {
        type: Sequelize.TEXT
      },
      range: {
        type: Sequelize.TEXT
      },
      area: {
        type: Sequelize.TEXT
      },
      components: {
        type: Sequelize.TEXT
      },
      duration: {
        type: Sequelize.TEXT
      },
      attack: {
        type: Sequelize.TEXT
      },
      damage: {
        type: Sequelize.TEXT
      },
      save: {
        type: Sequelize.TEXT
      },
      effect: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      userid: {
        type: Sequelize.INTEGER
      },
      likes: {
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
    await queryInterface.dropTable('userspells');
  }
};