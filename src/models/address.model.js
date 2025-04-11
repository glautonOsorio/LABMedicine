const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: "addressId",
      as: "users",
    });
    this.hasMany(models.Patient, {
      foreignKey: "addressId",
      as: "patients",
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
        zipCode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        street: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        number: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        complement: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        neighborhood: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        referencePoint: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
        modelName: "Address",
        tableName: "addresses",
      }
    );
  }
}

module.exports = Address;
