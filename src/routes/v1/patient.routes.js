const { Router } = require("express");
const validateNewPatient = require("../../middlewares/Patient/validatePatient");

const routes = new Router();

routes.post("/api/patient", validateNewPatient, addPatient);
routes.put("/api/patient/:id", attPatient);
routes.put("/api/patient/:id/status", attStatus);
routes.put("/api/patient/:id/allergies", attAllergies);
routes.get("/api/patient", searchPatient);
routes.get("/api/patient/:id", searchPatientId);
routes.delete("/api/patient/:id", deletePatient);

module.exports = routes;
