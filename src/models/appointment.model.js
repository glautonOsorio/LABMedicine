const { Model, DataTypes } = require("sequelize");

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        appointmentReason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        appointmentDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        appointmentTime: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        prescriptionMedication: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dosagePrecautions: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        systemStatus: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        medic_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Appointment",
        tableName: "appointments",
        underscored: true,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Patient, {
      as: "patient",
      foreignKey: "patient_id",
    });

    this.belongsTo(models.Medic, {
      as: "medic",
      foreignKey: "medic_id",
    });
  }
}

module.exports = Appointment;
