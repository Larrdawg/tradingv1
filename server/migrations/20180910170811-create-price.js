'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      symbol: {
        type: Sequelize.STRING
      },
      changePercent: {
        type: Sequelize.DECIMAL
      },
      close: {
        type: Sequelize.DECIMAL
      },
      high: {
        type: Sequelize.DECIMAL
      },
      label: {
        type: Sequelize.STRING
      },
      low: {
        type: Sequelize.DECIMAL
      },
      open: {
        type: Sequelize.DECIMAL
      },
      unadjustedVolume: {
        type: Sequelize.INTEGER
      },
      volume: {
        type: Sequelize.INTEGER
      },
      vwap: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prices');
  }
};