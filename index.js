require("dotenv").config();
const express = require("express");

const database = require("./src/database/database");

const validateNewPatient = require("./src/middlewares/Patient/validatePatient");
const validateAttPatient = require("./src/middlewares/Patient/validateAttPatient");

const addPatient = require("./src/controllers/Patient/addPatient");
const attPatient = require("./src/controllers/Patient/attPatient");
const attStatus = require("./src/controllers/Patient/attStatus");
const attAllergies = require("./src/controllers/Patient/attAllergies");
const searchPatient = require("./src/controllers/Patient/searchPatients");
const searchPatientId = require("./src/controllers/Patient/searchById");
const deletePatient = require("./src/controllers/Patient/deletePatient");

const addNurse = require("./src/controllers/Nurse/addNurse");
const attNurse = require("./src/controllers/Nurse/attNurse");
const attStatusNurse = require("./src/controllers/Nurse/attStatusNurse");
const searchNurse = require("./src/controllers/Nurse/searchNurses");
const searchNurseId = require("./src/controllers/Nurse/searchNurseId");
const deleteNurse = require("./src/controllers/Nurse/deleteNurse");

const addMedic = require("./src/controllers/Medic/addMedic");
const attMedic = require("./src/controllers/Medic/attPatient");
const attMedicStatus = require("./src/controllers/Medic/attStatusMedic");
const searchMedic = require("./src/controllers/Medic/searchMedics");
const searchMedicId = require("./src/controllers/Medic/searchMedicId");
const deleteMedic = require("./src/controllers/Medic/deleteMedic");

const makeAppointment = require("./src/controllers/appointment");

const app = express();
app.use(express.json());

database.authenticate();
database.sync({ alter: true });

app.post("/api/patient", validateNewPatient, addPatient);
app.put("/api/patient/:id", attPatient);
app.put("/api/patient/:id/status", attStatus);
app.put("/api/patient/:id/allergies", attAllergies);
app.get("/api/patient", searchPatient);
app.get("/api/patient/:id", searchPatientId);
app.delete("/api/patient/:id", deletePatient);

app.post("/api/nurse", addNurse);
app.put("/api/nurse/:id", attNurse);
app.put("/api/nurse/:id/systemStatus", attStatusNurse);
app.get("/api/nurse", searchNurse);
app.get("/api/nurse/:id", searchNurseId);
app.delete("/api/nurse/:id", deleteNurse);

app.post("/api/medic", addMedic);
app.put("/api/medic/:id", attMedic);
app.put("/api/medic/:id/systemStatus", attMedicStatus);
app.get("/api/medic", searchMedic);
app.get("/api/medic/:id", searchMedicId);
app.delete("/api/medic/:id", deleteMedic);

app.post("/api/appointment", makeAppointment);

app.listen(3333, () => {
  console.log("We are here");
});
