'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usermonster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usermonster.init({
    name: DataTypes.TEXT,
    size: DataTypes.TEXT,
    type: DataTypes.TEXT,
    alignment: DataTypes.TEXT,
    armorclass: DataTypes.TEXT,
    hitpoints: DataTypes.TEXT,
    speed: DataTypes.TEXT,
    stats: DataTypes.TEXT,
    savingthrows: DataTypes.TEXT,
    skills: DataTypes.TEXT,
    damageresistances: DataTypes.TEXT,
    damagevunerabilities: DataTypes.TEXT,
    damageimmunities: DataTypes.TEXT,
    conditionimmunities: DataTypes.TEXT,
    senses: DataTypes.TEXT,
    languages: DataTypes.TEXT,
    challenge: DataTypes.TEXT,
    prof: DataTypes.TEXT,
    abilities: DataTypes.TEXT,
    actions: DataTypes.TEXT,
    legendaryactions: DataTypes.TEXT,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usermonster',
  });
  return usermonster;
};