const { Model, DataTypes } = require("sequelize");

class ExamResult extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        result_text: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        file_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        exam_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        uploaded_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "ExamResult",
        tableName: "exam_results",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Exam, { foreignKey: "exam_id" });
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });
    this.belongsTo(models.User, { foreignKey: "uploaded_by", as: "uploader" });
  }
}

module.exports = ExamResult;
