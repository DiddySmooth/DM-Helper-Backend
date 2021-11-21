'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userlikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userlikes.init({
    userid: DataTypes.INTEGER,
    itemid: DataTypes.INTEGER,
    type: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'userlikes',
  });
  return userlikes;
};