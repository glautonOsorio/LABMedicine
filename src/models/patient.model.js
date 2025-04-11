"use strict";
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
        full_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: DataTypes.ENUM("male", "female", "other"),
          allowNull: false,
        },
        birthday: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rg: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        civil_status: {
          type: DataTypes.ENUM(
            "single",
            "married",
            "divorced",
            "widowed",
            "separated"
          ),
          allowNull: true,
        },
        phone_number: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        nationality: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        emergency_contact: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        list_of_allergies: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        specific_care: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        health_insurance: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        insurance_number: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        insurance_expiration_date: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        address_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        system_status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        modelName: "Patient",
        tableName: "patients",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Address, { foreignKey: "address_id" });
    this.belongsTo(models.User, { foreignKey: "user_id" });

    this.hasMany(models.Appointment, { foreignKey: "patient_id" });
    this.hasMany(models.Diet, { foreignKey: "patient_id" });
    this.hasMany(models.Exam, { foreignKey: "patient_id" });
    this.hasMany(models.Medicine, { foreignKey: "patient_id" });
    this.hasMany(models.PhysicalExercise, { foreignKey: "patient_id" });

    // Novas relações
    this.hasMany(models.Prescription, { foreignKey: "patient_id" });
    this.hasMany(models.MedicalRecord, { foreignKey: "patient_id" });
    this.hasMany(models.ExamResult, { foreignKey: "patient_id" });
    this.hasMany(models.Document, { foreignKey: "patient_id" });
  }
}

module.exports = Patient;
