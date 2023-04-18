const Medic = require("../../models/medic");

async function attMedicStatus(req, res) {
  try {
    const id = req.params.id;
    const medicId = await Medic.findByPk(id);

    if (!["Active", "Not Active"].includes(req.body.systemStatus)) {
      return res.status(400).json({
        message:
          "The system status needs to be one of these options (Active or Not Active),",
      });
    }

    if (!medicId) {
      return res.status(404).json({ message: "Medic not found" });
    }

    medicId.systemStatus = req.body.systemStatus;

    await medicId.save();

    return res.status(200).json(medicId);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = attMedicStatus;
