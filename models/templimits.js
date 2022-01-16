'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class templimits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  templimits.init({
    ulko: DataTypes.STRING,
    khhLattiaLowLimit: DataTypes.STRING,
    khhLattiaHighLimit: DataTypes.STRING,
    olohuoneLowLimit: DataTypes.STRING,
    olohuoneHighLimit: DataTypes.STRING,
    ykMHLowLimit: DataTypes.STRING,
    ykMHHighLimit: DataTypes.STRING,
    khhLowLimit: DataTypes.STRING,
    khhHighLimit: DataTypes.STRING,
    makuuhuoneLowLimit: DataTypes.STRING,
    makuuhuoneHighLimit: DataTypes.STRING,
    keittioLowLimit: DataTypes.STRING,
    keittioHighLimit: DataTypes.STRING,
    keittioLattiaLowLimit: DataTypes.STRING,
    keittioLattiaHighLimit: DataTypes.STRING,
    verantaLattiaLimit: DataTypes.STRING,
    veranta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'templimits',
  });
  return templimits;
};