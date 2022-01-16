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
        type: Sequelize.STRING
      },
      khhLattiaLowLimit: {
        type: Sequelize.STRING
      },
      khhLattiaHighLimit: {
        type: Sequelize.STRING
      },
      olohuoneLowLimit: {
        type: Sequelize.STRING
      },
      olohuoneHighLimit: {
        type: Sequelize.STRING
      },
      ykMHLowLimit: {
        type: Sequelize.STRING
      },
      ykMHHighLimit: {
        type: Sequelize.STRING
      },
      khhLowLimit: {
        type: Sequelize.STRING
      },
      khhHighLimit: {
        type: Sequelize.STRING
      },
      makuuhuoneLowLimit: {
        type: Sequelize.STRING
      },
      makuuhuoneHighLimit: {
        type: Sequelize.STRING
      },
      keittioLowLimit: {
        type: Sequelize.STRING
      },
      keittioHighLimit: {
        type: Sequelize.STRING
      },
      keittioLattiaLowLimit: {
        type: Sequelize.STRING
      },
      keittioLattiaHighLimit: {
        type: Sequelize.STRING
      },
      verantaLattiaLimit: {
        type: Sequelize.STRING
      },
      veranta: {
        type: Sequelize.STRING
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