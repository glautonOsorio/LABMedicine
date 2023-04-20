const Sequelize = require("sequelize");
const database = require("../database/database");
const Patient = require("./patient");
const Medic = require("./medic");

const Appointment = database.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  patient_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  medic_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Appointment.belongsTo(Patient);
Appointment.belongsTo(Medic);

module.exports = Appointment;
