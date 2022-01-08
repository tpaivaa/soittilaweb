'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class awayHome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  awayHome.init({
    startDate: DataTypes.STRING,
    startTime: DataTypes.STRING,
    stopDate: DataTypes.STRING,
    stopTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'awayHome',
  });
  return awayHome;
};