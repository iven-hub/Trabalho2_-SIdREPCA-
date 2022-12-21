'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('viagem', [
      {
        partida: 'Sao vicente',
        chegada: 'Santo Antao',
        horario_part: new Date(22,12,2022),
        horario_chegada: new Date(22,12,2022),
        qtd_passageiros:26,
        qtd_carga: 30,
        IMO: 1,
        user_id: 3,

      },
      {
        partida: 'Sao vicente',
        chegada: 'santiago',
        horario_part: new Date(10,12,2022),
        horario_chegada: new Date(13,12,2022),
        qtd_passageiros:41,
        qtd_carga:45,
        IMO : 2,
        user_id: 2,
      },
      {
        partida: 'santiago',
        chegada: 'sal',
        horario_part: new Date(21,12,2022),
        horario_chegada: new Date(23,12,2022),
        qtd_passageiros:30,
        qtd_carga:40,
        IMO: 3,
        user_id: 1,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('viagem', null, {})
  }
};
