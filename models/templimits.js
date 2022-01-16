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
    ulko: DataTypes.INTEGER,
    khhLattiaLowLimit: DataTypes.INTEGER,
    khhLattiaHighLimit: DataTypes.INTEGER,
    olohuoneLowLimit: DataTypes.INTEGER,
    olohuoneHighLimit: DataTypes.INTEGER,
    ykMHLowLimit: DataTypes.INTEGER,
    ykMHHighLimit: DataTypes.INTEGER,
    khhLowLimit: DataTypes.INTEGER,
    khhHighLimit: DataTypes.INTEGER,
    makuuhuoneLowLimit: DataTypes.INTEGER,
    makuuhuoneHighLimit: DataTypes.INTEGER,
    keittioLowLimit: DataTypes.INTEGER,
    keittioHighLimit: DataTypes.INTEGER,
    keittioLattiaLowLimit: DataTypes.INTEGER,
    keittioLattiaHighLimit: DataTypes.INTEGER,
    verantaLattiaLimit: DataTypes.INTEGER,
    veranta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'templimits',
  });
  return templimits;
};