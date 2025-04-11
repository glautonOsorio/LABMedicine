const { Model, DataTypes } = require("sequelize");

class MedicalRecord extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        diagnosis: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        symptoms: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        treatment_plan: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        notes: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "MedicalRecord",
        tableName: "medical_records",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "created_by", as: "doctor" });
  }
}

module.exports = MedicalRecord;
