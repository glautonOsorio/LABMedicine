const Patient = require("../../models/patient");

async function attAllergies(req, res) {
  try {
    const id = req.params.id;
    const patientId = await Patient.findByPk(id);

    if (
      !["NONE", "ASTMHA", "SKIN_ALLERGIES", "LACTOSE", "OTHER"].includes(
        req.body.allergies
      )
    ) {
      return res.status(400).json({
        message:
          "These are the options that we have (NONE,ASTMHA,SKIN_ALLERGIES,LACTOSE,OTHER)",
      });
    }

    if (!patientId) {
      return res.status(404).json({ message: "Patient not found" });
    }

    patientId.allergies = req.body.allergies;

    await patientId.save();

    return res.status(200).json(patientId);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = attAllergies;
