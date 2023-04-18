const Patient = require("../../models/patient");

async function searchPatient(req, res) {
  try {
    const queryStatus = req.query;

    if (queryStatus.status) {
      if (
        ![
          "AWAITING_TREATMENT",
          "IN_TREATMENT",
          "TREATED",
          "NOT_TREATED",
        ].includes(queryStatus.status)
      ) {
        return res.json({
          message:
            "The status needs to be one of these options (AWAITING_TREATMENT,IN_TREATMENT,TREATED,NOT_TREATED)",
        });
      }

      const patients = await Patient.findAll({
        where: {
          status: queryStatus.status,
        },
      });
      res.json(patients);
    } else {
      const patients = await Patient.findAll();
      res.json(patients);
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "There was a error in the request" });
  }
}

module.exports = searchPatient;
