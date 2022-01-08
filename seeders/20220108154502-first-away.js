'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('awayHomes', [{
    startDate: '12.12.2021',
    startTime: '10:00',
    stopDate: '13.12.2021',
    stopTime: '12:00',
    createdAt: new Date(),
    updatedAt: new Date()
    },{
    startDate: '14.12.2021',
    startTime: '10:00',
    stopDate: '15.12.2021',
    stopTime: '12:00',
    createdAt: new Date(),
    updatedAt: new Date()  
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('awayHomes', null, {});
  }
};
