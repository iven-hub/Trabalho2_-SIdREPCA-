'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('navio',[
      {
        imo: 1,
        name: 'fastferry',
        type: 'transport',
        maxcargas:46,
        maxpassageiros: 45,
        prop: 'nosferry',
      },
      {
        imo: 2,
        name: 'tututa',
        type: 'transporte passageiro',
        maxcargas:40,
        maxpassageiros: 44,
        prop: 'interilhas',
      },
      {
        imo: 3,
        name: 'Chiquinho',
        type: 'transporte passageiro',
        maxcargas:50,
        maxpassageiros: 46,
        prop: 'interilhas',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('navio', null,{})
  }
};
