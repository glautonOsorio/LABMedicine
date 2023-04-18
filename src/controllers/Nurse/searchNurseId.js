const Nurse = require("../../models/nurse");

async function searchNurseId(req, res) {
  try {
    const id = req.params.id;
    const nurseData = await Nurse.findByPk(id);

    if (!nurseData) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    return res.status(200).json(nurseData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchNurseId;
