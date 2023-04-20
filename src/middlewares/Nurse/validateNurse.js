const yup = require("yup");

const validation = yup.object().shape({
  name: yup.string("Name needs to be a String"),
  gender: yup.string("Gender needs to be a String"),
  birthDay: yup
    .string("Birthday needs to be a String")
    .required("Birthday is obligatory"),
  cpf: yup
    .string("Cpf needs to be a String")
    .min(11, "CPF needs 11 numbers")
    .required("CPF is obligatory"),
  cellphone: yup.string("Cellphone needs to be a String"),
  educationInstitution: yup
    .string("Education instituition needs to be a String")
    .required("Education instituition is obligatory"),
  cofenUf: yup.string("Cofen/UF needs to be a String"),
  systemStatus: yup.string("System status needs to be a String"),
});

function validateNewNurse(req, res, next) {
  try {
    validation.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewNurse;
