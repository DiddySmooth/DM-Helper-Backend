'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userspells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userspells.init({
    name: DataTypes.TEXT,
    level: DataTypes.INTEGER,
    school: DataTypes.TEXT,
    castingtime: DataTypes.TEXT,
    range: DataTypes.TEXT,
    area: DataTypes.TEXT,
    components: DataTypes.TEXT,
    duration: DataTypes.TEXT,
    attack: DataTypes.TEXT,
    damage: DataTypes.TEXT,
    save: DataTypes.TEXT,
    effect: DataTypes.TEXT,
    description: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userspells',
  });
  return userspells;
};