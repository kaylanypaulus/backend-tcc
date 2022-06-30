const Customers = (sequelize, DataTypes) => {
    return sequelize.define('Customers', {
      customerName: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.INTEGER,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      road: DataTypes.STRING,
      residentialNumber: DataTypes.INTEGER,
      cell: DataTypes.INTEGER,
    });
  };
  
  module.exports = Customers;