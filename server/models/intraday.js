'use strict';
module.exports = (sequelize, DataTypes) => {
  var Intraday = sequelize.define('Intraday', {
    symbol:{
      type:DataTypes.STRING,
      primaryKey:true
    } ,
    date:{
      type: DataTypes.DATE,
      primaryKey: true
    },
    minute:{
      type:DataTypes.DATE,
      primaryKey:true
    },
    label: DataTypes.STRING,
    high: DataTypes.DECIMAL(20,4),
    low: DataTypes.DECIMAL(20,4),
    average: DataTypes.DECIMAL(20,4),
    volume: DataTypes.INTEGER,
    notional: DataTypes.DECIMAL(20,4),
    numberOfTrades: DataTypes.INTEGER,
    marketHigh: DataTypes.DECIMAL(20,4),
    marketHigh: DataTypes.DECIMAL(20,4),
    marketVolume: DataTypes.INTEGER,
    marketNotional: DataTypes.DECIMAL(20,4),
    marketNumberOfTrades: DataTypes.INTEGER,
    open: DataTypes.DECIMAL(20,4),
    close: DataTypes.DECIMAL(20,4),
    marketOpen: DataTypes.DECIMAL(20,4),
    marketClose: DataTypes.DECIMAL(20,4),
    changeOverTime: DataTypes.DECIMAL(20,4),
    marketChangeOverTime: DataTypes.DECIMAL(20,4)
  }, {});
  Intraday.associate = function(models) {
    // associations can be defined here
  };
  return Intraday;
};