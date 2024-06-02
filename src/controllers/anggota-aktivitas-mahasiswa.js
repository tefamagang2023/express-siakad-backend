const { AnggotaAktivitasMahasiswa, AktivitasMahasiswa, Mahasiswa } = require("../../models");

const getAllAnggotaAktivitasMahasiswa = async (req, res) => {
  try {
    // Ambil semua data anggota_aktivitas_mahasiswa dari database
    const anggota_aktivitas_mahasiswa = await AnggotaAktivitasMahasiswa.findAll({ include: [{ model: AktivitasMahasiswa }, { model: Mahasiswa }] });

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: "<===== GET All Anggota Aktivitas Mahasiswa Success",
      jumlahData: anggota_aktivitas_mahasiswa.length,
      data: anggota_aktivitas_mahasiswa,
    });
  } catch (error) {
    next(error);
  }
};

const getAnggotaAktivitasMahasiswaById = async (req, res) => {
  try {
    // Dapatkan ID dari parameter permintaan
    const AnggotaAktivitasMahasiswaId = req.params.id;

    // Cari data anggota_aktivitas_mahasiswa berdasarkan ID di database
    const anggota_aktivitas_mahasiswa = await AnggotaAktivitasMahasiswa.findByPk(AnggotaAktivitasMahasiswaId, {
      include: [{ model: AktivitasMahasiswa }, { model: Mahasiswa }],
    });

    // Jika data tidak ditemukan, kirim respons 404
    if (!anggota_aktivitas_mahasiswa) {
      return res.status(404).json({
        message: `<===== Anggota Aktivitas Mahasiswa With ID ${AnggotaAktivitasMahasiswaId} Not Found:`,
      });
    }

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: `<===== GET Anggota Aktivitas Mahasiswa By ID ${AnggotaAktivitasMahasiswaId} Success:`,
      data: anggota_aktivitas_mahasiswa,
    });
  } catch (error) {
    next(error);
  }
};

const getAnggotaAktivitasMahasiswaByAktivitasId = async (req, res) => {
  try {
    // Dapatkan ID dari parameter permintaan
    const aktivitasId = req.params.id_aktivitas;

    // Cari data anggota_aktivitas_mahasiswa berdasarkan ID di database
    const anggota_aktivitas_mahasiswa = await AnggotaAktivitasMahasiswa.findAll({
      where: {
        id_aktivitas: aktivitasId,
      },
      include: [{ model: AktivitasMahasiswa }, { model: Mahasiswa }],
    });

    // Jika data tidak ditemukan, kirim respons 404
    if (!anggota_aktivitas_mahasiswa) {
      return res.status(404).json({
        message: `<===== Anggota Aktivitas Mahasiswa With ID ${aktivitasId} Not Found:`,
      });
    }

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: `<===== GET Anggota Aktivitas Mahasiswa By Aktivitas ID ${aktivitasId} Success:`,
      jumlahData: anggota_aktivitas_mahasiswa.length,
      data: anggota_aktivitas_mahasiswa,
    });
  } catch (error) {
    next(error);
  }
};

const createAnggotaAktivitasMahasiswa = async (req, res, next) => {
  try {
    // Dapatkan ID dari parameter permintaan
    const aktivitasId = req.params.id_aktivitas;
    const { id_registrasi_mahasiswa, jenis_peran } = req.body;

    // Tentukan nama_jenis_peran berdasarkan nilai jenis_peran
    const nama_jenis_peran = jenis_peran == "3" ? "Personal" : "Anggota";

    // Gunakan metode create untuk membuat data AnggotaAktivitasMahasiswa baru
    const newAnggotaAktivitasMahasiswa = await AnggotaAktivitasMahasiswa.create({
      jenis_peran: jenis_peran,
      nama_jenis_peran: nama_jenis_peran,
      id_aktivitas: aktivitasId,
      id_registrasi_mahasiswa: id_registrasi_mahasiswa,
    });

    // Kirim respons JSON jika berhasil
    res.status(201).json({
      message: "<===== CREATE Anggota Aktivitas Mahasiswa Success",
      data: newAnggotaAktivitasMahasiswa,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAnggotaAktivitasMahasiswaById = async (req, res, next) => {
  try {
    // Dapatkan ID dari parameter permintaan
    const anggotaAktivitasMahasiswaId = req.params.id;

    // Cari data anggota_aktivitas_mahasiswa berdasarkan ID di database
    let anggota_aktivitas_mahasiswa = await AnggotaAktivitasMahasiswa.findByPk(anggotaAktivitasMahasiswaId);

    // Jika data tidak ditemukan, kirim respons 404
    if (!anggota_aktivitas_mahasiswa) {
      return res.status(404).json({
        message: `<===== Anggota Aktivitas Mahasiswa With ID ${anggotaAktivitasMahasiswaId} Not Found:`,
      });
    }

    // Hapus data anggota_aktivitas_mahasiswa dari database
    await anggota_aktivitas_mahasiswa.destroy();

    // Kirim respons JSON jika berhasil
    res.status(200).json({
      message: `<===== DELETE Anggota Aktivitas Mahasiswa With ID ${anggotaAktivitasMahasiswaId} Success:`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAnggotaAktivitasMahasiswa,
  getAnggotaAktivitasMahasiswaById,
  getAnggotaAktivitasMahasiswaByAktivitasId,
  createAnggotaAktivitasMahasiswa,
  deleteAnggotaAktivitasMahasiswaById,
};
