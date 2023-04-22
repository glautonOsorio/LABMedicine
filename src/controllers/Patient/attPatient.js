const Patient = require("../../models/patient");
const Medic = require("../../models/medic");
const Nurse = require("../../models/nurse");

async function attPatient(req, res) {
  try {
    const patientData = await Patient.findByPk(req.params.id);
    if (!patientData) {
      return res.status(404).json({ message: "Patient not found" });
    }
    const cpfPatient = await Patient.findOne({
      where: { cpf: req.body.cpf },
    });
    const cpfMedic = await Medic.findOne({
      where: { cpf: req.body.cpf },
    });
    const cpfNurse = await Nurse.findOne({
      where: { cpf: req.body.cpf },
    });

    if (cpfPatient || cpfMedic || cpfNurse) {
      return res.status(409).json({ message: "The CPF is already in use" });
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
