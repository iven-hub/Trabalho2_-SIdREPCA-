'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('navio', {
      IMO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      maxCargas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxPassageiros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      prop: { //propretario
        type: Sequelize.STRING(50),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('navio')
  }
};
