const { Sequelize } = require("sequelize");
const database = require("../database/database");

const Nurse = database.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  birthDay: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  cellphone: {
    type: Sequelize.STRING,
  },
  educationInstitution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cofenUf: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  systemStatus: {
    type: Sequelize.ENUM("Active", "Not Active"),
    defaultValue: "Active",
  },
});

module.exports = Nurse;
