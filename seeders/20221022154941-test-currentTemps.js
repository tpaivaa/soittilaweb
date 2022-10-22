'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('awayHomes', [{
      room: '',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      room: '',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('currentTemps', null, {});
  }
};
