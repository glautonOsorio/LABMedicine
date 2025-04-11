"use strict";
const { Model, DataTypes } = require("sequelize");

class PhysicalExercise extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        exercise_name: {
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
        exercise_type: {
          type: DataTypes.ENUM(
            "aerobic endurance",
            "muscular endurance",
            "flexibility",
            "strength",
            "agility",
            "other"
          ),
          allowNull: false,
        },
        quantity_per_week: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        description: {
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
        modelName: "PhysicalExercise",
        tableName: "physical_exercises",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "user_id", as: "creator" });
  }
}

module.exports = PhysicalExercise;
