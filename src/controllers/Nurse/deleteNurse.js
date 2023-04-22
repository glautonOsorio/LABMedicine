const Nurse = require("../../models/nurse");

async function deleteNurse(req, res) {
  try {
    const id = req.params.id;
    const nurseData = await Nurse.findByPk(id);

    if (!nurseData) {
      return res.status(404).json({ message: "Nurse not found" });
    }
    await nurseData.destroy();

    return res.status(204).json("The deed is done, Nurse is no more");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = deleteNurse;
