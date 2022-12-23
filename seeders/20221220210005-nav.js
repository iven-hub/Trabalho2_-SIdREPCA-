'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('navio',[
      {
        imo: 1,
        name: 'fastferry',
        type: 'transport',
        maxCargas:46,
        maxPassageiros: 45,
        prop: 'nosferry',
      },
      {
        imo: 2,
        name: 'tututa',
        type: 'transporte passageiro',
        maxCargas:40,
        maxPassageiros: 44,
        prop: 'interilhas',
      },
      {
        imo: 3,
        name: 'Chiquinho',
        type: 'transporte passageiro',
        maxCargas:50,
        maxPassageiros: 46,
        prop: 'interilhas',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('navio', null,{})
  }
};
