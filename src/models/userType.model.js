const { Model, DataTypes } = require("sequelize");

class UsersTypes extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: "user_type_id",
      as: "users",
    });
  }

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
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        modelName: "UsersTypes",
        tableName: "users_types",
      }
    );
  }
}

module.exports = UsersTypes;
