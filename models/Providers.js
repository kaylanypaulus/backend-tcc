const Providers = (sequelize, DataTypes) => {
    return sequelize.define('Providers', {
      supplierName: DataTypes.STRING,
      email: DataTypes.STRING,
      cnpj: DataTypes.INTEGER,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      road: DataTypes.STRING,
      commercialNumber: DataTypes.INTEGER,
      tel: DataTypes.INTEGER,
    });
  };
  
  module.exports = Providers;