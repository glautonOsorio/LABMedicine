const Medic = require("../../models/medic");

async function searchMedicId(req, res) {
  try {
    const id = req.params.id;
    const medicData = await Medic.findByPk(id);

    if (!medicData) {
      return res.status(404).json({ message: "Medic not found" });
    }

    return res.status(200).json(medicData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchMedicId;
