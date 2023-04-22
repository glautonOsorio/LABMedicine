const Patient = require("../../models/patient");
const Medic = require("../../models/medic");
const Nurse = require("../../models/nurse");

async function addPatient(req, res) {
  try {
    const data = {
      name: req.body.name,
      gender: req.body.gender,
      birthDay: req.body.birthDay,
      cpf: req.body.cpf,
      cellphone: req.body.cellphone,
      emergencyContact: req.body.emergencyContact,
      allergies: req.body.allergies,
      healthCare: req.body.healthCare,
      status: req.body.status,
    };

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

    const patient = await Patient.create(data);

    res.status(201).json(patient);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was a error in the request" });
  }
}

module.exports = addPatient;
