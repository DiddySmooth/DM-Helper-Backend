'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usermagicitems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usermagicitems.init({
    name: DataTypes.TEXT,
    type: DataTypes.TEXT,
    attunement: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    rarity: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'usermagicitems',
  });
  return usermagicitems;
};