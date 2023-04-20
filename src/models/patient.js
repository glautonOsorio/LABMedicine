const { Sequelize } = require("sequelize");
const database = require("../database/database");

const Patient = database.define("patient", {
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
  emergencyContact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergies: {
    type: Sequelize.ENUM(
      "NONE",
      "ASTMHA",
      "SKIN_ALLERGIES",
      "LACTOSE",
      "OTHER"
    ),
    defaultValue: "NONE",
  },
  healthCare: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM(
      "AWAITING_TREATMENT",
      "IN_TREATMENT",
      "TREATED",
      "NOT_TREATED"
    ),
    defaultValue: "AWAITING_TREATMENT",
  },
  appointment_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Patient;
