const axios = require("axios");
const { getToken } = require("./get-token");
const { RiwayatNilaiMahasiswa } = require("../../../models");
const { Periode } = require("../../../models");

const getRiwayatNilaiMahasiswa = async (req, res, next) => {
  try {
    // Mendapatkan token
    const token = await getToken();

    const requestBody = {
      act: "GetRiwayatNilaiMahasiswa",
      token: `${token}`,
      filter: `angkatan = '2023'`,
      order: "id_registrasi_mahasiswa",
    };

    // Menggunakan token untuk mengambil data
    const response = await axios.post("http://feeder.ubibanyuwangi.ac.id:3003/ws/live2.php", requestBody);

    // Tanggapan dari API
    const dataRiwayatNilaiMahasiswa = response.data.data;

    // Loop untuk menambahkan data ke dalam database
    for (const riwayat_nilai_mahasiswa of dataRiwayatNilaiMahasiswa) {
      let id_periode = null;

      // Periksa apakah id_periode atau periode_pelaporan ada di Periode
      const periode = await Periode.findOne({
        where: {
          periode_pelaporan: riwayat_nilai_mahasiswa.id_periode,
        },
      });

      // Jika ditemukan, simpan nilainya
      if (periode) {
        id_periode = periode.id_periode;
      }

      await RiwayatNilaiMahasiswa.create({
        nilai_angka: riwayat_nilai_mahasiswa.nilai_angka,
        nilai_huruf: riwayat_nilai_mahasiswa.nilai_huruf,
        nilai_indeks: riwayat_nilai_mahasiswa.nilai_indeks,
        angkatan: riwayat_nilai_mahasiswa.angkatan,
        id_registrasi_mahasiswa: riwayat_nilai_mahasiswa.id_registrasi_mahasiswa,
        id_periode: id_periode,
        id_kelas: riwayat_nilai_mahasiswa.id_kelas,
      });
    }

    // Kirim data sebagai respons
    res.status(200).json({
      message: "Create Riwayat Nilai Mahasiswa Success",
      totalData: dataRiwayatNilaiMahasiswa.length,
      dataRiwayatNilaiMahasiswa: dataRiwayatNilaiMahasiswa,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRiwayatNilaiMahasiswa,
};
