const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Student = sequelize.define("student", {
  firstName: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: { notEmpty: true }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true, notEmpty: true }
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://via.placeholder.com/150",
    validate: { isUrl: true }
  },
  gpa: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { isFloat: true, min: 0.0, max: 4.0 }
  }
});

module.exports = Student;
