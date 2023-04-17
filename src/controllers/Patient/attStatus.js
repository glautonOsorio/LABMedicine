const Patient = require("../../models/patient");

async function attStatus(req, res) {
  try {
    const id = req.params.id;
    const patientId = await Patient.findByPk(id);

    if (
      ![
        "AWAITING_TREATMENT",
        "IN_TREATMENT",
        "TREATED",
        "NOT_TREATED",
      ].includes(req.body.status)
    ) {
      return res.status(400).json({
        message:
          "The status needs to be one of these options (AWAITING_TREATMENT,IN_TREATMENT,TREATED,NOT_TREATED),",
      });
    }

    if (!patientId) {
      return res.status(404).json({ message: "Patient not found" });
    }

    patientId.status = req.body.status;

    await patientId.save();

    return res.status(200).json(patientId);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = attStatus;
