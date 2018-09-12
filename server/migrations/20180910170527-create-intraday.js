'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Intradays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      minute: {
        type: Sequelize.DATE
      },
      label: {
        type: Sequelize.STRING
      },
      high: {
        type: Sequelize.DECIMAL(20,4)
      },
      low: {
        type: Sequelize.DECIMAL(20,4)
      },
      average: {
        type: Sequelize.DECIMAL(20,4)
      },
      volume: {
        type: Sequelize.INTEGER
      },
      notional: {
        type: Sequelize.DECIMAL(20,4)
      },
      numberOfTrades: {
        type: Sequelize.INTEGER
      },
      marketHigh: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketHigh: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketVolume: {
        type: Sequelize.INTEGER
      },
      marketNotional: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketNumberOfTrades: {
        type: Sequelize.INTEGER
      },
      open: {
        type: Sequelize.DECIMAL(20,4)
      },
      close: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketOpen: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketClose: {
        type: Sequelize.DECIMAL(20,4)
      },
      changeOverTime: {
        type: Sequelize.DECIMAL(20,4)
      },
      marketChangeOverTime: {
        type: Sequelize.DECIMAL(20,4)
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
    return queryInterface.dropTable('Intradays');
  }
};