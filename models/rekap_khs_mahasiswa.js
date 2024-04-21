"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RekapKHSMahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi tabel parent
      RekapKHSMahasiswa.belongsTo(models.Mahasiswa, { foreignKey: "id_registrasi_mahasiswa" });
      RekapKHSMahasiswa.belongsTo(models.Prodi, { foreignKey: "id_prodi" });
      RekapKHSMahasiswa.belongsTo(models.Periode, { foreignKey: "id_periode" });
      RekapKHSMahasiswa.belongsTo(models.MataKuliah, { foreignKey: "id_matkul" });
    }
  }
  RekapKHSMahasiswa.init(
    {
      angkatan: {
        type: DataTypes.CHAR(4),
        allowNull: false,
      },
      nama_periode: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      nilai_angka: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: false,
      },
      nilai_huruf: {
        type: DataTypes.CHAR(3),
        allowNull: false,
      },
      nilai_indeks: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      sks_x_indeks: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      id_registrasi_mahasiswa: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      id_prodi: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      id_periode: {
        type: DataTypes.CHAR(5),
        allowNull: false,
      },
      id_matkul: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RekapKHSMahasiswa",
      tableName: "rekap_khs_mahasiswas",
    }
  );
  return RekapKHSMahasiswa;
};