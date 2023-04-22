const Nurse = require("../../models/nurse");

async function searchNurse(req, res) {
  try {
    const queryStatus = req.query;

    if (queryStatus.systemStatus) {
      if (!["Active", "Not Active"].includes(queryStatus.systemStatus)) {
        return res.status(400).json({
          message:
            "The status needs to be one of these options (Active or Not Active),",
        });
      }

      const nurses = await Nurse.findAll({
        where: {
          systemStatus: queryStatus.systemStatus,
        },
      });
      res.json(nurses);
    } else {
      const nurses = await Nurse.findAll();
      res.json(nurses);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchNurse;
