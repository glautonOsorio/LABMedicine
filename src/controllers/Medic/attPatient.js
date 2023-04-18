const Medic = require("../../models/medic");

async function attMedic(req, res) {
  try {
    const medicData = await Medic.findByPk(req.params.id);
    if (!medicData) {
      return res.status(404).json({ message: "Medic not found" });
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
