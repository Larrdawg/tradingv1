'use strict';
module.exports = (sequelize, DataTypes) => {
  var Price = sequelize.define('Price', {
    date: {
      type:DataTypes.DATE,
      primaryKey:true
    },
    symbol:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    changePercent: DataTypes.DECIMAL(20,4),
    close: DataTypes.DECIMAL(20,4),
    high: DataTypes.DECIMAL(20,4),
    label: DataTypes.STRING,
    low: DataTypes.DECIMAL(20,4),
    open: DataTypes.DECIMAL(20,4),
    unadjustedVolume: DataTypes.INTEGER,
    volume: DataTypes.INTEGER,
    vwap: DataTypes.DECIMAL(20,4)
  }, {});
  Price.associate = function(models) {
    // associations can be defined here
  };
  return Price;
};