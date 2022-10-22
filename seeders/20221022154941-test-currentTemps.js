'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('currentTemps', [{
      room: 'khh',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      room: 'makuuhuone',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'makuuhuoneAla',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'keittioLattia',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'olohuone',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'olohuoneUP',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'khhLattia',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'keittio',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ulko',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ulkoP',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ulkoE',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'varaajaMiddle',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'greeWaterCold',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'greeGasCold',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ykMH',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'verantaLattia',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'veranta',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ykAula',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      },{
      room: 'ykMH2',
      temp: 12.5,
      createdAt: new Date(),
      updatedAt: new Date()  
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('currentTemps', null, {});
  }
}