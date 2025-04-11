const { Model, DataTypes } = require("sequelize");

class Prescription extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        dosage: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        frequency: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        duration: {
          type: DataTypes.STRING,
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
        prescribed_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        medicine_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Prescription",
        tableName: "prescriptions",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "prescribed_by", as: "doctor" });
    this.belongsTo(models.Medicine, { foreignKey: "medicine_id" });
  }
}

module.exports = Prescription;
