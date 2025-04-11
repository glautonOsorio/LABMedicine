"use strict";
const { Model, DataTypes } = require("sequelize");

class Exam extends Model {
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
        exam_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        exam_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        exam_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        laboratory: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        results: {
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
        document_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Exam",
        tableName: "exams",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "user_id" });
    this.belongsTo(models.Document, {
      foreignKey: "document_id",
      as: "document",
    });
  }
}

module.exports = Exam;
