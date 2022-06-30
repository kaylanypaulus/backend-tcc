const Product = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      name: DataTypes.STRING,
      unitaryValue: DataTypes.FLOAT,
      qtyStock: DataTypes.FLOAT,
    });
  };
  
  module.exports = Product;