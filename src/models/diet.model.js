const { Model, DataTypes } = require("sequelize");

class Diet extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },

        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        dietType: DataTypes.ENUM(
          "low carb",
          "dash",
          "paleolithic",
          "ketogenic",
          "dukan",
          "mediterranean",
          "other"
        ),
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        systemStatus: { type: DataTypes.BOOLEAN, defaultValue: true },
        patientId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Diet",
        tableName: "diets",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Patient, {
      as: "patient",
      foreignKey: "patient_id",
    });

    this.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
  }
}

module.exports = Diet;
