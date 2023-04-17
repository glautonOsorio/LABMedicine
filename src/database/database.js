const Sequelize = require("sequelize");

const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: process.env.DATABASE_PASSWORD,
  port: "5432",
  database: "LABMedicine",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = database;
