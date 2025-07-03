require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

// Feel free to rename the database to whatever you want!
const dbName = "student_campus_db";

console.log("Using DB_URL:", process.env.DB_URL);
console.log("Password type:", typeof process.env.DB_PASSWORD);
console.log("DB_NAME type:", typeof process.env.DB_NAME);

const db = new Sequelize(
  process.env.DB_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
