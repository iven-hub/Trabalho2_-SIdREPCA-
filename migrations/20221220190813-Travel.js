'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('viagem', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      partida: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      chegada: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      horario_part: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horario_chegada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      qtd_passageiros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtd_carga: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imo_navio: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'navio', key: 'imo'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
     
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('viagem')
  }
};
