const { Model, DataTypes } = require("sequelize");

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        gender: {
          type: DataTypes.STRING,
        },
        birthDay: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        cellphone: {
          type: DataTypes.STRING,
        },
        emergencyContact: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        allergies: {
          type: DataTypes.ENUM(
            "NONE",
            "ASTMHA",
            "SKIN_ALLERGIES",
            "LACTOSE",
            "OTHER"
          ),
          defaultValue: "NONE",
        },
        healthCare: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.ENUM(
            "AWAITING_TREATMENT",
            "IN_TREATMENT",
            "NOT_TREATED",
            "TREATED"
          ),
          defaultValue: "AWAITING_TREATMENT",
        },
        appointment_id: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Patient",
        tableName: "patients",
      }
    );
  }
}

module.exports = Patient;
