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

const app = express();
app.use(express.json());

database.authenticate();
database.sync({ alter: true });

app.post("/api/patient", validateNewPatient, addPatient);
app.put("/api/patient/:id", validateAttPatient, attPatient);
app.put("/api/patient/:id/status", attStatus);
app.put("/api/patient/:id/allergies", attAllergies);
app.get("/api/patient", searchPatient);

app.listen(3333, () => {
  console.log("We are here");
});
