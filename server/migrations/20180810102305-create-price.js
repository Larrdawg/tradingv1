'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Prices', {
      date: {
        type: Sequelize.DATE,
        primaryKey: true,
        allowNull:false,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      open: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      high: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      low: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      close: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      volume: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Prices')
};