const { Model, DataTypes } = require("sequelize");

class Nurse extends Model {
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
        educationInstitution: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cofenUf: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        systemStatus: {
          type: DataTypes.ENUM("Active", "Not Active"),
          defaultValue: "Active",
        },
      },
      {
        sequelize,
        modelName: "Nurse",
        tableName: "nurses",
      }
    );
  }
}

module.exports = Nurse;
