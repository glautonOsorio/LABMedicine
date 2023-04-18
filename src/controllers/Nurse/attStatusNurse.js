const Nurse = require("../../models/nurse");

async function attStatusNurse(req, res) {
  try {
    const id = req.params.id;
    const nurseId = await Nurse.findByPk(id);

    if (!["Active", "Not Active"].includes(req.body.systemStatus)) {
      return res.status(400).json({
        message:
          "The system status needs to be one of these options (Active or Not Active),",
      });
    }

    if (!nurseId) {
      return res.status(404).json({ message: "Nurse not found" });
    }

    nurseId.systemStatus = req.body.systemStatus;

    await nurseId.save();

    return res.status(200).json(nurseId);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = attStatusNurse;
