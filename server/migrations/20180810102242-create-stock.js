'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Stocks', {
      symbol: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) =>  queryInterface.dropTable('Stocks')
};