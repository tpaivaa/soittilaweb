'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Sequelize.transaction(async transaction => {
      await queryInterface.addColumn(
        'templimits',
        'ykMH2',
        {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        {
          transaction,
        }
      )
      throw new Error('err')
    })
  },

  down: async (queryInterface, Sequelize) => {
    return Sequelize.transaction(async transaction => {
      await queryInterface.addColumn(
        'templimits',
        'ykMH2',
        {
          transaction,
        }
      )
      throw new Error('err')
    })
  }
};
