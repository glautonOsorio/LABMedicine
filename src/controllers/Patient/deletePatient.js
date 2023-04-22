const Patient = require("../../models/patient");

async function deletePatient(req, res) {
  try {
    const id = req.params.id;
    const patientData = await Patient.findByPk(id);

    if (!patientData) {
      return res.status(404).json({ message: "Patient not found" });
    }
    if (patientData.appointment_id > 0) {
      return res
        .status(409)
        .json({ message: "The patient has appointments in the database" });
    } // creditos para Andre Luiz Amorim de Souza

    await patientData.destroy();

    return res.status(204).json("The deed is done, Medic is no more");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = deletePatient;
