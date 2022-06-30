const Employees = (sequelize, DataTypes) => {
    return sequelize.define('Employees', {
      employeeName: DataTypes.STRING,
      email: DataTypes.STRING,
      office: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      road: DataTypes.STRING,
      residentialNumber: DataTypes.INTEGER,
      cell: DataTypes.INTEGER,
      admissionDate: DataTypes.DATE,
    });
  };
  
  module.exports = Employees;