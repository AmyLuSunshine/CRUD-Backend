const { DataTypes } = require("sequelize");
const sequelize = require("../database/db"); // Adjust the path to your db config

const Campus = sequelize.define("campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://via.placeholder.com/150",
    validate: { isUrl: true },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: {
    type: DataTypes.TEXT,
  }
});

module.exports = Campus;
