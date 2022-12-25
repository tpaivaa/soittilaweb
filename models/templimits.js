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
    ulko: { allowNull: false, type:DataTypes.INTEGER, unique: true },
    khhLattiaLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    khhLattiaHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    olohuoneLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    olohuoneHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    ykMHLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    ykMHHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    khhLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    khhHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    makuuhuoneLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    makuuhuoneHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    keittioLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    keittioHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    keittioLattiaLowLimit: { allowNull: false, type:DataTypes.INTEGER },
    keittioLattiaHighLimit: { allowNull: false, type:DataTypes.INTEGER },
    verantaLattiaLimit: { allowNull: false, type:DataTypes.INTEGER },
    veranta: { allowNull: false, type:DataTypes.INTEGER },
    ykMH2: { allowNull: false, type:DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'templimits',
  });
  return templimits;
};