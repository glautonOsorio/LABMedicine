const { Router } = require("express");
const validateNewNurse = require("../../middlewares/Nurse/validateNurse");

const routes = new Router();

routes.post("/api/nurse", validateNewNurse, addNurse);
routes.put("/api/nurse/:id", attNurse);
routes.put("/api/nurse/:id/systemStatus", attStatusNurse);
routes.get("/api/nurse", searchNurse);
routes.get("/api/nurse/:id", searchNurseId);
routes.delete("/api/nurse/:id", deleteNurse);

module.exports = routes;
