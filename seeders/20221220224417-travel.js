'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('viagem', [
      {
        partida: 'Sao vicente',
        chegada: 'Santo Antao',
        horario_part: new Date(),
        horario_chegada: new Date(new Date().getTime() + 2 * 60 * 60 * 1000,),
        qtd_passageiros:26,
        qtd_carga: 30,
        imo_navio: 1,
        user_id: 3,

      },
      {
        partida: 'Sao vicente',
        chegada: 'santiago',
        horario_part: new Date(new Date().getTime() + 2 * 60 * 60 * 1000,),
        horario_chegada: new Date(new Date().getTime() + 4 * 60 * 60 * 1000,),
        qtd_passageiros:41,
        qtd_carga:45,
        imo_navio : 2,
        user_id: 2,
      },
      {
        partida: 'santiago',
        chegada: 'sal',
        horario_part: new Date(new Date().getTime() + 4 * 60 * 60 * 1000,),
        horario_chegada: new Date(new Date().getTime() + 6 * 60 * 60 * 1000,),
        qtd_passageiros:30,
        qtd_carga:40,
        imo_navio: 3,
        user_id: 1,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('viagem', null, {})
  }
};
