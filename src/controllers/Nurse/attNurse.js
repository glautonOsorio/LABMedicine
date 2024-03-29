const Patient = require("../../models/patient");
const Medic = require("../../models/medic");
const Nurse = require("../../models/nurse");

async function attNurse(req, res) {
  try {
    const nurseData = await Nurse.findByPk(req.params.id);
    if (!nurseData) {
      return res.status(404).json({ message: "Nurse not found" });
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
    nurseData.name = req.body.name;
    nurseData.gender = req.body.gender;
    nurseData.birthDay = req.body.birthDay;
    nurseData.cpf = req.body.cpf;
    nurseData.cellphone = req.body.cellphone;
    nurseData.educationInstitution = req.body.educationInstitution;
    nurseData.cofenUf = req.body.cofenUf;
    nurseData.systemStatus = req.body.systemStatus;

    await nurseData.save();
    res.json(nurseData);
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
}

module.exports = attNurse;
