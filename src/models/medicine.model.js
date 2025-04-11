"use strict";
const { Model, DataTypes } = require("sequelize");

class Medicine extends Model {
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
          allowNull: false,
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        medicine_type: {
          type: DataTypes.ENUM(
            "capsule",
            "pill",
            "liquid",
            "cream",
            "gel",
            "inhalation",
            "injection",
            "spray"
          ),
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        unit: {
          type: DataTypes.ENUM("mg", "mcg", "g", "ml", "%"),
          allowNull: true,
        },
        comments: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        system_status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Medicine",
        tableName: "medicines",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "user_id", as: "creator" });
    this.hasMany(models.Prescription, { foreignKey: "medicine_id" });
  }
}

module.exports = Medicine;
