const Patient = require("../../models/patient");

async function deletePatient(req, res) {
  try {
    const id = req.params.id;
    const patientData = await Patient.findByPk(id);

    if (!patientData) {
      return res.status(404).json({ message: "Patient not found" });
    }
    await patientData.destroy();

    return response.status(204).json("The deed is done, patient is no more");
  } catch (error) {
    return response
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = deletePatient;
