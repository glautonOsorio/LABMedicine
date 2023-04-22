const Medic = require("../../models/medic");

async function deleteMedic(req, res) {
  try {
    const id = req.params.id;
    const medicData = await Medic.findByPk(id);

    if (!medicData) {
      return res.status(404).json({ message: "Medic not found" });
    }
    if (medicData.appointment_id > 0) {
      return res
        .status(409)
        .json({ message: "The medic has appointments in the database" });
    } // creditos para Andre Luiz Amorim de Souza

    await medicData.destroy();

    return res.status(204).json("The deed is done, Medic is no more");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = deleteMedic;
