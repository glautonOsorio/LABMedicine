const Nurse = require("../models/nurse.model");

class NurseService {
  async index() {
    return await Nurse.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "cpf"] },
    });
  }
  async listById(id) {
    const nurse = await Nurse.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!nurse) {
      return null;
    }
    return nurse;
  }
  async store(body) {
    const { cpf } = body;
    const existingNurse = await Nurse.findOne({
      where: { cpf },
    });

    if (existingNurse) {
      return null;
    }
    const storedNurse = await Nurse.create(body);
    return storedNurse;
  }

  async update(id, body) {
    const nurse = await Nurse.findByPk(id);
    if (!nurse) {
      return null;
    }
    Object.assign(nurse, body);
    await nurse.save();
    return nurse;
  }
  async destroy(id) {
    const nurse = await Nurse.findByPk(id);
    if (!nurse) {
      return null;
    }
    await nurse.destroy();
    return nurse;
  }
}
module.exports = new NurseService();
