const Sequelize = require("sequelize");
const configDB = require("../config/db.js");
const Patient = require("../models/patient.model.js");
const Appointment = require("../models/appointment.model.js");
const Medic = require("../models/medic.model.js");
const Nurse = require("../models/nurse.model.js");

const models = { Patient, Appointment, Medic, Nurse };

const connection = new Sequelize(configDB);

Object.values(models).forEach((model) => {
  model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = connection;
