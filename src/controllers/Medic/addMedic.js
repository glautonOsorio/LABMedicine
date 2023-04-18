const Patient = require("../../models/patient");
const Medic = require("../../models/medic");
const Nurse = require("../../models/nurse");

async function addMedic(req, res) {
  try {
    const data = {
      name: req.body.name,
      gender: req.body.gender,
      birthDay: req.body.birthDay,
      cpf: req.body.cpf,
      cellphone: req.body.cellphone,
      educationInstitution: req.body.educationInstitution,
      crmuf: req.body.crmuf,
      specialty: req.body.specialty,
      stsystemStatusatus: req.body.systemStatus,
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

    const medic = await Medic.create(data);

    res.status(201).json(medic);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was a error in the request" });
  }
}

module.exports = addMedic;
