'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stock = sequelize.define('Stock', {
    symbol: {
      type:DataTypes.STRING,
      primaryKey:true,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Stock.removeAttribute('createdAt');
  Stock.removeAttribute('updatedAt');
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};