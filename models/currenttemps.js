'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currentTemps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  currentTemps.init({
    room: { allowNull: false, type:DataTypes.STRING, unique:true },
    temp: { allowNull: false, type:DataTypes.DECIMAL }
  }, {
    sequelize,
    modelName: 'currentTemps',
  });
  return currentTemps;
};