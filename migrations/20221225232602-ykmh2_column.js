'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('templimits',{
      ykMH2: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('templimits',{
      ykMH2: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  }
};
