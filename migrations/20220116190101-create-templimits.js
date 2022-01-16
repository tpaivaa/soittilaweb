'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('templimits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ulko: {
        type: Sequelize.INTEGER
      },
      khhLattiaLowLimit: {
        type: Sequelize.INTEGER
      },
      khhLattiaHighLimit: {
        type: Sequelize.INTEGER
      },
      olohuoneLowLimit: {
        type: Sequelize.INTEGER
      },
      olohuoneHighLimit: {
        type: Sequelize.INTEGER
      },
      ykMHLowLimit: {
        type: Sequelize.INTEGER
      },
      ykMHHighLimit: {
        type: Sequelize.INTEGER
      },
      khhLowLimit: {
        type: Sequelize.INTEGER
      },
      khhHighLimit: {
        type: Sequelize.INTEGER
      },
      makuuhuoneLowLimit: {
        type: Sequelize.INTEGER
      },
      makuuhuoneHighLimit: {
        type: Sequelize.INTEGER
      },
      keittioLowLimit: {
        type: Sequelize.INTEGER
      },
      keittioHighLimit: {
        type: Sequelize.INTEGER
      },
      keittioLattiaLowLimit: {
        type: Sequelize.INTEGER
      },
      keittioLattiaHighLimit: {
        type: Sequelize.INTEGER
      },
      verantaLattiaLimit: {
        type: Sequelize.INTEGER
      },
      veranta: {
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
    await queryInterface.dropTable('templimits');
  }
};