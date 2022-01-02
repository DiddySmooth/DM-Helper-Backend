'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usermonsters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      size: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      alignment: {
        type: Sequelize.TEXT
      },
      armorclass: {
        type: Sequelize.TEXT
      },
      hitpoints: {
        type: Sequelize.TEXT
      },
      speed: {
        type: Sequelize.TEXT
      },
      stats: {
        type: Sequelize.TEXT
      },
      savingthrows: {
        type: Sequelize.TEXT
      },
      skills: {
        type: Sequelize.TEXT
      },
      damageresistances: {
        type: Sequelize.TEXT
      },
      damagevunerabilities: {
        type: Sequelize.TEXT
      },
      damageimmunities: {
        type: Sequelize.TEXT
      },
      conditionimmunities: {
        type: Sequelize.TEXT
      },
      senses: {
        type: Sequelize.TEXT
      },
      languages: {
        type: Sequelize.TEXT
      },
      challenge: {
        type: Sequelize.TEXT
      },
      prof: {
        type: Sequelize.TEXT
      },
      abilities: {
        type: Sequelize.TEXT
      },
      actions: {
        type: Sequelize.TEXT
      },
      legendaryactions: {
        type: Sequelize.TEXT
      },
      userid: {
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
    await queryInterface.dropTable('usermonsters');
  }
};