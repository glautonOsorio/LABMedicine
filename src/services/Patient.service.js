const { Op } = require("sequelize");
const Appointment = require("../models/appointment.model");
const Medic = require("../models/medic.model");
const Patient = require("../models/patient.model");

class PatientService {
  async index() {
    return await Patient.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "cpf", "email"] },
    });
  }

  async listById(id) {
    const patient = await Patient.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Appointment,
          as: "appointments",
          attributes: {
            exclude: ["createdAt", "updatedAt", "patient_id"],
            include: [
              {
                model: Medic,
                as: "medic",
                attributes: {
                  include: ["name", "crmuf"],
                },
              },
            ],
          },
        },
      ],
    });

    if (!patient) {
      return null;
    }
    return patient;
  }

  async store(body) {
    const { email, cpf } = body;
    const existingPatient = await Patient.findOne({
      where: {
        [Op.or]: [{ cpf }, { email }],
      },
    });

    if (existingPatient) {
      return null;
    }

    const storedPatient = await Patient.create({
      body,
    });
    return storedPatient;
  }

  async update(id, body) {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return null;
    }
    Object.assign(patient, body);
    await patient.save();
    return patient;
  }

  async destroy(id) {
    const patient = await Patient.findByPk(id);
    if (!patient) {
      return null;
    }

    // we are going to use the false deletion in the future

    await patient.destroy();
    return true;
  }
}

module.exports = new PatientService();
