const { Sequelize } = require("sequelize");
const database = require("../database/database");

const Medic = database.define("medic", {
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
  crmuf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialty: {
    type: Sequelize.ENUM(
      "GENERAL PRACTITIONER",
      "ANESTHESTIST",
      "DERMATOLOGIST",
      "GYNECOLOGIST",
      "NEUROLOGIST",
      "PEDIATICIAN",
      "PSYCHIATRIST",
      "ORTHOPEDIST"
    ),
    allowNull: false,
  },
  systemStatus: {
    type: Sequelize.ENUM("Active", "Not Active"),
    defaultValue: "Active",
  },
  appointment_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Medic;
