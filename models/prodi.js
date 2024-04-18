"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prodi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prodi.belongsTo(models.JenjangPendidikan, { foreignKey: "id_jenjang_pendidikan" });
      Prodi.hasMany(models.Periode, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.ListMataKuliah, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.MataKuliah, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.DetailMataKuliah, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.Kurikulum, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.DetailKurikulum, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.PenugasanDosen, { foreignKey: "id_prodi" });
      Prodi.hasMany(models.MatkulKurikulum, { foreignKey: "id_prodi" });
    }
  }
  Prodi.init(
    {
      kode_program_studi: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      nama_program_studi: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      id_jenjang_pendidikan: {
        type: DataTypes.DECIMAL(2, 0),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Prodi",
      tableName: "prodis",
    }
  );
  return Prodi;
};