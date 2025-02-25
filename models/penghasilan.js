"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Penghasilan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi tabel child
      Penghasilan.hasMany(models.BiodataMahasiswa, { foreignKey: "id_penghasilan_ayah" });
      Penghasilan.hasMany(models.BiodataMahasiswa, { foreignKey: "id_penghasilan_ibu" });
      Penghasilan.hasMany(models.BiodataMahasiswa, { foreignKey: "id_penghasilan_wali" });
      Penghasilan.hasMany(models.DataLengkapMahasiswaProdi, { foreignKey: "id_penghasilan_ayah" });
      Penghasilan.hasMany(models.DataLengkapMahasiswaProdi, { foreignKey: "id_penghasilan_ibu" });
      Penghasilan.hasMany(models.DataLengkapMahasiswaProdi, { foreignKey: "id_penghasilan_wali" });
    }
  }
  Penghasilan.init(
    {
      id_penghasilan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(10),
      },
      nama_penghasilan: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Penghasilan",
      tableName: "penghasilans",
    }
  );
  return Penghasilan;
};
