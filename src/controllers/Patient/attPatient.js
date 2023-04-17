const Patient = require("../../models/patient");

async function attPatient(req, res) {
  try {
    const patientData = await Patient.findByPk(req.params.id);
    if (!patientData) {
      return res.status(404).json({ message: "Patient not found" });
    }
    if (!req.body) {
      res
        .status(400)
        .json({ message: "There is something wrong with your requesition" });
    }
    patientData.name = req.body.name;
    patientData.gender = req.body.gender;
    patientData.birthDay = req.body.birthDay;
    patientData.cpf = req.body.cpf;
    patientData.cellphone = req.body.cellphone;
    patientData.emergencyContact = req.body.emergencyContact;
    patientData.allergies = req.body.allergies;
    patientData.healthCare = req.body.healthCare;
    patientData.status = req.body.status;
    patientData.timesTreated = req.body.timesTreated;
    await patientData.save();
    res.json(patientData);
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
}

module.exports = attPatient;
