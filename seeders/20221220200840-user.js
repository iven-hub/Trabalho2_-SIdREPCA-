'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        nome: 'Alex Monteiro',
        password: 'aa12ss22',
        admin: false,
        
      },
      {
        id: 2,
        nome: 'Paulo silva',
        password: '112351h',
        admin: true,

      },
      {
        id: 3,
        nome: 'Messi ramos',
        password: 'mm1010cm',
        admin: false,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  }
};
