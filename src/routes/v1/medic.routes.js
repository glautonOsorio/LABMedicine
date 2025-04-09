const { Router } = require("express");

const addMedic = require("./src/controllers/Medic/addMedic");
const attMedic = require("./src/controllers/Medic/attMedic");
const attMedicStatus = require("./src/controllers/Medic/attStatusMedic");
const searchMedic = require("./src/controllers/Medic/searchMedics");
const searchMedicId = require("./src/controllers/Medic/searchMedicId");
const deleteMedic = require("./src/controllers/Medic/deleteMedic");
const validateNewMedic = require("../../middlewares/Medic/validateMedic");

const routes = new Routes();

routes.post("/api/medic", validateNewMedic, addMedic);
routes.put("/api/medic/:id", attMedic);
routes.put("/api/medic/:id/systemStatus", attMedicStatus);
routes.get("/api/medic", searchMedic);
routes.get("/api/medic/:id", searchMedicId);
routes.delete("/api/medic/:id", deleteMedic);
routes.post("/api/medic/appointment", makeAppointment);

module.exports = routes;
