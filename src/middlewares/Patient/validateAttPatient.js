const yup = require("yup");

const validation = yup.object().shape({
  name: yup.string("Name needs to be String"),
  gender: yup.string("Gender needs to be String"),
  birthDay: yup.string("Birthday needs to be String").required(),
  cpf: yup
    .string("CPF needs to be String")
    .min(11, "CPF needs 11 numbers")
    .required(),
  cellphone: yup.string("Cellphone needs to be String"),
  emergencyContact: yup
    .string("Emergency Contact needs to be String")
    .required(),
  allergies: yup.string("Allergies needs to be String"),
  healthCare: yup.string("HealthCare needs to be String"),
  status: yup.string("Status needs to be String"),
});

function validateAttPatient(req, res, next) {
  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateAttPatient;
