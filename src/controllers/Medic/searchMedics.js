const Medic = require("../../models/medic");

async function searchMedic(req, res) {
  try {
    const queryStatus = req.query;

    if (queryStatus.systemStatus) {
      if (!["Active", "Not Active"].includes(req.body.systemStatus)) {
        return res.status(400).json({
          message:
            "The status needs to be one of these options (Active or Not Active),",
        });
      }

      const medics = await Medic.findAll({
        where: {
          systemStatus: queryStatus.systemStatus,
        },
      });
      res.json(medics);
    } else {
      const medics = await Medic.findAll();
      res.json(medics);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchMedic;
