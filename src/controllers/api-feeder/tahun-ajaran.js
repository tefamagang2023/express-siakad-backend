const axios = require("axios");
const { getToken } = require("./get-token");
const { TahunAjaran } = require("../../../models");

const getTahunAjaran = async (req, res, next) => {
  try {
    // Mendapatkan token
    const token = await getToken();

    const requestBody = {
      act: "GetTahunAjaran",
      token: `${token}`,
    };

    // Menggunakan token untuk mengambil data
    const response = await axios.post("http://feeder.ubibanyuwangi.ac.id:3003/ws/live2.php", requestBody);

    // Tanggapan dari API
    const dataTahunAjaran = response.data.data;

    // Loop untuk menambahkan data ke dalam database
    for (const tahun_ajaran of dataTahunAjaran) {
      // Periksa apakah data sudah ada di tabel
      const existingTahunAjaran = await TahunAjaran.findOne({
        where: {
          id_tahun_ajaran: tahun_ajaran.id_tahun_ajaran,
        },
      });

      if (!existingTahunAjaran) {
        // Data belum ada, buat entri baru di database
        await TahunAjaran.create({
          id_tahun_ajaran: tahun_ajaran.id_tahun_ajaran,
          nama_tahun_ajaran: tahun_ajaran.nama_tahun_ajaran,
          a_periode: tahun_ajaran.a_periode_aktif,
          tanggal_mulai: tahun_ajaran.tanggal_mulai,
          tanggal_selesai: tahun_ajaran.tanggal_selesai,
        });
      }
    }

    // Kirim data sebagai respons
    res.status(200).json({
      message: "Create Tahun Ajaran Success",
      totalData: dataTahunAjaran.length,
      dataTahunAjaran: dataTahunAjaran,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTahunAjaran,
};
