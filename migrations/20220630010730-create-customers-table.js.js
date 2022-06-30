'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      // nome de tabela é no PLURAL
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      road: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      residentialNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cell: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  },
};
