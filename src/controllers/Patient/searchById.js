const Patient = require("../../models/patient");

async function searchPatientId(req, res) {
  try {
    const id = req.params.id;
    const patientData = await Patient.findByPk(id);

    if (!patientData) {
      return res.status(404).json({ message: "Patient not found" });
    }

    return res.status(200).json(patientData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchPatientId;
