const Patient = require("../../models/patient");
const Medic = require("../../models/medic");
const Nurse = require("../../models/nurse");

async function attMedic(req, res) {
  try {
    const medicData = await Medic.findByPk(req.params.id);
    if (!medicData) {
      return res.status(404).json({ message: "Medic not found" });
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
    medicData.name = req.body.name;
    medicData.gender = req.body.gender;
    medicData.birthDay = req.body.birthDay;
    medicData.cpf = req.body.cpf;
    medicData.cellphone = req.body.cellphone;
    medicData.educationInstitution = req.body.educationInstitution;
    medicData.crmuf = req.body.crmuf;
    medicData.specialty = req.body.specialty;
    medicData.stsystemStatusatus = req.body.stsystemStatusatus;
    await medicData.save();
    res.json(medicData);
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
}

module.exports = attMedic;
