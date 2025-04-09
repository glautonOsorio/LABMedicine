const { Router } = require("express");

const medicRoutes = require("./v1/medic.routes");
const nurseRoutes = require("./v1/nurse.routes");
const patientRoutes = require("./v1/patient.routes");

const routes = new Router();

routes.use("/", medicRoutes);
routes.use("/", nurseRoutes);
routes.use("/", patientRoutes);

module.exports = routes;
