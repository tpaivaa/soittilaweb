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
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true
      },
      khhLattiaLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      khhLattiaHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      olohuoneLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      olohuoneHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ykMHLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ykMHHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      khhLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      khhHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      makuuhuoneLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      makuuhuoneHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keittioLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keittioHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keittioLattiaLowLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      keittioLattiaHighLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      verantaLattiaLimit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      veranta: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ykMH2: {
        allowNull: false,
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
