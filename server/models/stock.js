'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stock = sequelize.define('Stock', {
    symbol:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    mcap: DataTypes.BIGINT,
    exchange: DataTypes.STRING,
    pe_ratio: DataTypes.DECIMAL(30,4)
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};