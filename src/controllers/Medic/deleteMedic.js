const Medic = require("../../models/medic");

async function deleteMedic(req, res) {
  try {
    const id = req.params.id;
    const medicData = await Medic.findByPk(id);

    if (!medicData) {
      return res.status(404).json({ message: "Medic not found" });
    }
    await medicData.destroy();

    return response.status(204).json("The deed is done, Medic is no more");
  } catch (error) {
    return response
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = deleteMedic;
