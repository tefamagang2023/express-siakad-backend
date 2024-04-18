"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PenugasanDosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PenugasanDosen.belongsTo(models.Dosen, { foreignKey: "id_dosen" });
      PenugasanDosen.belongsTo(models.TahunAjaran, { foreignKey: "id_tahun_ajaran" });
      PenugasanDosen.belongsTo(models.PerguruanTinggi, { foreignKey: "id_perguruan_tinggi" });
      PenugasanDosen.belongsTo(models.Prodi, { foreignKey: "id_prodi" });
    }
  }
  PenugasanDosen.init(
    {
      jk: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      nama_surat_tugas: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      tanggal_surat_tugas: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mulai_surat_tugas: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tanggal_create: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tanggal_ptk_keluar: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      id_dosen: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      id_tahun_ajaran: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      id_perguruan_tinggi: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      id_prodi: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PenugasanDosen",
      tableName: "penugasan_dosens",
    }
  );
  return PenugasanDosen;
};