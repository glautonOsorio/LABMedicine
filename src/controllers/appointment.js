const Appointment = require("../models/appointment");
const Patient = require("../models/patient");
const Medic = require("../models/medic");

async function makeAppointment(req, res) {
  try {
    const data = {
      patient_id: req.body.patient_id,
      medic_id: req.body.medic_id,
    };
    if (!data.patient_id || !data.medic_id) {
      return res.status(400).json({ message: "Id not declared" });
    }
    const patient = await Patient.findByPk(data.patient_id);
    const medic = await Medic.findByPk(data.medic_id);

    if (!patient || !medic) {
      return res
        .status(409)
        .json({ message: "Patient or Medic does not exist" });
    }

    if ((medic.systemStatus = "Not Active")) {
      return res
        .status(409)
        .json({ message: `Dr.${medic.name} is not active today` });
    }
    const appointment = await Appointment.create(data);

    patient.status = "TREATED";
    patient.appointment_id = patient.appointment_id + 1;
    medic.appointment_id = medic.appointment_id + 1;

    await patient.save();
    await medic.save();
    res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: "There was a error" });
  }
}

module.exports = makeAppointment;
