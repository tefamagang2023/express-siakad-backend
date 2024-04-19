"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PerhitunganSKS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PerhitunganSKS.belongsTo(models.KelasKuliah, { foreignKey: "id_kelas_kuliah" });
      PerhitunganSKS.belongsTo(models.PenugasanDosen, { foreignKey: "id_registrasi_dosen" });
      PerhitunganSKS.belongsTo(models.Substansi, { foreignKey: "id_substansi" });
    }
  }
  PerhitunganSKS.init(
    {
      rencana_minggu_pertemuan: {
        type: DataTypes.DECIMAL(2, 0),
        allowNull: false,
      },
      perhitungan_sks: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      id_kelas_kuliah: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      id_registrasi_dosen: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      id_substansi: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "PerhitunganSKS",
      tableName: "perhitungan_sks",
    }
  );
  return PerhitunganSKS;
};