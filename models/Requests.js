const Requests = (sequelize, DataTypes) => {
    return sequelize.define('Requests', {
      orderDate: DataTypes.DATE,
      employeeName: DataTypes.STRING,
      customerName: DataTypes.STRING,
      productName: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      status: DataTypes.STRING,
    });
  };
  
  module.exports = Requests;