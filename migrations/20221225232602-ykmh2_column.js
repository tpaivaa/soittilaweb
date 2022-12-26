'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        'templimits',
        'ykMH2',
        {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        'templimits',
        'ykMH2'
    )
  }
};
