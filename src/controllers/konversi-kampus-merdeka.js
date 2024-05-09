const { KonversiKampusMerdeka } = require("../../models");

const getAllKonversiKampusMerdeka = async (req, res) => {
  try {
    // Ambil semua data konversi_kampus_merdeka dari database
    const konversi_kampus_merdeka = await KonversiKampusMerdeka.findAll();

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: "<===== GET All Konversi Kampus Merdeka Success",
      jumlahData: konversi_kampus_merdeka.length,
      data: konversi_kampus_merdeka,
    });
  } catch (error) {
    next(error);
  }
};

const getKonversiKampusMerdekaById = async (req, res) => {
  try {
    // Dapatkan ID dari parameter permintaan
    const KonversiKampusMerdekaId = req.params.id;

    // Cari data konversi_kampus_merdeka berdasarkan ID di database
    const konversi_kampus_merdeka = await KonversiKampusMerdeka.findByPk(KonversiKampusMerdekaId);

    // Jika data tidak ditemukan, kirim respons 404
    if (!konversi_kampus_merdeka) {
      return res.status(404).json({
        message: `<===== Konversi Kampus Merdeka With ID ${KonversiKampusMerdekaId} Not Found:`,
      });
    }

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: `<===== GET Konversi Kampus Merdeka By ID ${KonversiKampusMerdekaId} Success:`,
      data: konversi_kampus_merdeka,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllKonversiKampusMerdeka,
  getKonversiKampusMerdekaById,
};