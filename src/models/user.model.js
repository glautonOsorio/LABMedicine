"use strict";
const { Model, DataTypes } = require("sequelize");
const passwordEncryption = require("../../utils/passwordEncryption");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birthDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        userTypeId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        addressId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        systemStatus: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        underscored: true,
        timestamps: true,
        paranoid: true,
        hooks: {
          beforeSave: async (user) => {
            if (user.password) {
              user.password = await passwordEncryption.encrypt(user.password);
            }
          },
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.UsersTypes, {
      foreignKey: "userTypeId",
      as: "userType",
    });

    this.belongsTo(models.Address, {
      foreignKey: "addressId",
      as: "address",
    });

    this.hasMany(models.Patient, { foreignKey: "user_id", as: "patients" });
    this.hasMany(models.Appointment, {
      foreignKey: "user_id",
      as: "appointments",
    });
    this.hasMany(models.Exam, { foreignKey: "user_id", as: "exams" });
    this.hasMany(models.Medicine, { foreignKey: "user_id", as: "medicines" });
    this.hasMany(models.PhysicalExercise, {
      foreignKey: "user_id",
      as: "exercises",
    });
    this.hasMany(models.Document, { foreignKey: "user_id", as: "documents" });
    this.hasMany(models.MedicalRecord, {
      foreignKey: "user_id",
      as: "medicalRecords",
    });
    this.hasMany(models.Prescription, {
      foreignKey: "user_id",
      as: "prescriptions",
    });
    this.hasMany(models.Diet, { foreignKey: "user_id", as: "diets" });
    this.hasMany(models.ExamResult, {
      foreignKey: "user_id",
      as: "examResults",
    });
    this.hasMany(models.Log, { foreignKey: "user_id", as: "logs" });
  }
}

module.exports = User;
