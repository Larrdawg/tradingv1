'use strict';
module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    date: {
      type:DataTypes.DATE,
      primaryKey: true,
    },
    symbol: DataTypes.STRING,
    open: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.INTEGER,
  }, {});
  Price.removeAttribute('createdAt');
  Price.removeAttribute('updatedAt');
  Price.associate = function(models) {
    // associations can be defined here
  };
  return Price;
};