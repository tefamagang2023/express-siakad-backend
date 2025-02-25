const axios = require("axios");
const { getToken } = require("./get-token");
const { JenisKeluar } = require("../../../models");

const getJenisKeluar = async (req, res, next) => {
  try {
    // Mendapatkan token
    const token = await getToken();

    const requestBody = {
      act: "GetJenisKeluar",
      token: `${token}`,
    };

    // Menggunakan token untuk mengambil data
    const response = await axios.post("http://feeder.ubibanyuwangi.ac.id:3003/ws/live2.php", requestBody);

    // Tanggapan dari API
    const dataJenisKeluar = response.data.data;

    // Loop untuk menambahkan data ke dalam database
    for (const jenis_keluar of dataJenisKeluar) {
      // Periksa apakah data sudah ada di tabel
      const existingJenisKeluar = await JenisKeluar.findOne({
        where: {
          id_jenis_keluar: jenis_keluar.id_jenis_keluar,
        },
      });

      if (!existingJenisKeluar) {
        // Data belum ada, buat entri baru di database
        await JenisKeluar.create({
          id_jenis_keluar: jenis_keluar.id_jenis_keluar,
          jenis_keluar: jenis_keluar.jenis_keluar,
          apa_mahasiswa: jenis_keluar.apa_mahasiswa,
        });
      }
    }

    // Kirim data sebagai respons
    res.status(200).json({
      message: "Create Jenis Keluar Success",
      totalData: dataJenisKeluar.length,
      dataJenisKeluar: dataJenisKeluar,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getJenisKeluar,
};
