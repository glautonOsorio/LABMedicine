const { Model, DataTypes } = require("sequelize");

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        message: { type: DataTypes.STRING, allowNull: false },
        endpoint: { type: DataTypes.STRING, allowNull: false },
        httpVerb: {
          type: DataTypes.ENUM("GET", "POST", "PUT", "DELETE"),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        modelName: "Log",
        tableName: "log",
      }
    );
  }
}

module.exports = Log;
