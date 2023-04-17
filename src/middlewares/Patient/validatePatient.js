const yup = require("yup");

const validation = yup.object().shape({
  name: yup.string(),
  gender: yup.string(),
  birthDay: yup.string().required("Birthday is obligatory"),
  cpf: yup
    .string()
    .min(11, "CPF needs 11 numbers")
    .required("CPF is obligatory"),
  cellphone: yup.string(),
  emergencyContact: yup.string().required("Emergency Contact is obligatory"),
  allergies: yup.string(),
  healthCare: yup.string(),
  status: yup.string(),
  timesTreated: yup.number(),
});

function validateNewPatient(req, res, next) {
  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewPatient;
