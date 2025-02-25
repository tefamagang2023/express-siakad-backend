// configuration env
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// define express server
const cors = require("cors");
const express = require("express");
const path = require("path");

// import routes
// route api feeder dikti
const apiFeederRoutes = require("./routes/api-feeder");

// route endpoint pengujian performa
const pengujianPerformaRoutes = require("./routes/pengujian-performa");

// route api local done
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const roleRoutes = require("./routes/role");
const rolePermissionRoutes = require("./routes/role-permission");
const agamaRoutes = require("./routes/agama");
const negaraRoutes = require("./routes/negara");
const wilayahRoutes = require("./routes/wilayah");
const perguruanTinggiRoutes = require("./routes/perguruan_tinggi");
const profilPTRoutes = require("./routes/profil-pt");
const jalurMasukRoutes = require("./routes/jalur-masuk");
const jenisPendaftaranRoutes = require("./routes/jenis-pendaftaran");
const jenisTinggalRoutes = require("./routes/jenis-tinggal");
const alatTransportasiRoutes = require("./routes/alat-transportasi");
const statusMahasiswaRoutes = require("./routes/status-mahasiswa");
const kebutuhanKhususRoutes = require("./routes/kebutuhan-khusus");
const penghasilanRoutes = require("./routes/penghasilan");
const jenisSMSRoutes = require("./routes/jenis-sms");
const lembagaPengangkatanRoutes = require("./routes/lembaga-pengangkatan");
const statusKeaktifanPegawaiRoutes = require("./routes/status-keaktifan-pegawai");
const pangkatGolonganRoutes = require("./routes/pangkat-golongan");
const pekerjaanRoutes = require("./routes/pekerjaan");
const dosenRoutes = require("./routes/dosen");
const biodataDosenRoutes = require("./routes/biodata-dosen");
const jenjangPendidikanRoutes = require("./routes/jenjang-pendidikan");
const prodiRoutes = require("./routes/prodi");
const periodeRoutes = require("./routes/periode");
const jenisSubstansiRoutes = require("./routes/jenis-substansi");
const substansiRoutes = require("./routes/substansi");
const substansiKuliahRoutes = require("./routes/substansi-kuliah");
const mataKuliahRoutes = require("./routes/mata-kuliah");
const tahunAjaranRoutes = require("./routes/tahun-ajaran");
const fakultasRoutes = require("./routes/fakultas");
const semesterRoutes = require("./routes/semester");
const kurikulumRoutes = require("./routes/kurikulum");
const detailKurikulumRoutes = require("./routes/detail-kurikulum");
const penugasanDosenRoutes = require("./routes/penugasan-dosen");
const matkulKurikulumRoutes = require("./routes/matkul-kurikulum");
const kelasKuliahRoutes = require("./routes/kelas-kuliah");
const detailKelasKuliahRoutes = require("./routes/detail-kelas-kuliah");
const perhitunganSKSRoutes = require("./routes/perhitungan-sks");
const biodataMahasiswaRoutes = require("./routes/biodata-mahasiswa");
const mahasiswaRoutes = require("./routes/mahasiswa");
const jenisKeluarRoutes = require("./routes/jenis-keluar");
const pembiayaanRoutes = require("./routes/pembiayaan");
const bidangMinatRoutes = require("./routes/bidang-minat");
const riwayatPendidikanMahasiswaRoutes = require("./routes/riwayat-pendidikan-mahasiswa");
const detailNilaiPerkuliahanKelasRoutes = require("./routes/detail-nilai-perkuliahan-kelas");
const skalaNilaiProdiRoutes = require("./routes/skala-nilai-prodi");
const riwayatNilaiMahasiswaRoutes = require("./routes/riwayat-nilai-mahasiswa");
const pesertaKelasKuliahRoutes = require("./routes/peserta-kelas-kuliah");
const perkuliahanMahasiswaRoutes = require("./routes/perkuliahan-mahasiswa");
const detailPerkuliahanMahasiswaRoutes = require("./routes/detail-perkuliahan-mahasiswa");
const periodePerkuliahanRoutes = require("./routes/periode-perkuliahan");
const detailPeriodePerkuliahanRoutes = require("./routes/detail-periode-perkuliahan");
const krsMahasiswaRoutes = require("./routes/krs-mahasiswa");
const aktivitasKuliahMahasiswaRoutes = require("./routes/aktivitas-kuliah-mahasiswa");
const jenisAktivitasMahasiswaRoutes = require("./routes/jenis-aktivitas-mahasiswa");
const dataLengkapMahasiswaProdiRoutes = require("./routes/data-lengkap-mahasiswa-prodi");
const aktivitasMahasiswaRoutes = require("./routes/aktivitas-mahasiswa");
const anggotaAktivitasMahasiswaRoutes = require("./routes/anggota-aktivitas-mahasiswa");
const konversiKampusMerdekaRoutes = require("./routes/konversi-kampus-merdeka");
const transkripMahasiswaRoutes = require("./routes/transkrip-mahasiswa");
const rekapJumlahMahasiswaRoutes = require("./routes/rekap-jumlah-mahasiswa");
const rekapKHSMahasiswaRoutes = require("./routes/rekap-khs-mahasiswa");
const rekapKRSMahasiswaRoutes = require("./routes/rekap-krs-mahasiswa");
const angkatanRoutes = require("./routes/angkatan");
const jabatanRoutes = require("./routes/jabatan");
const unitJabatanRoutes = require("./routes/unit-jabatan");
const sistemKuliahRoutes = require("./routes/sistem-kuliah");
const sistemKuliahMahasiswaRoutes = require("./routes/sistem-kuliah-mahasiswa");
const tagihanMahasiswaRoutes = require("./routes/tagihan-mahasiswa");
const pembayaranMahasiswaRoutes = require("./routes/pembayaran-mahasiswa");
const unsurPenilaianRoutes = require("./routes/unsur-penilaian");
const bobotPenilaianRoutes = require("./routes/bobot-penilaian");
const ruangPerkuliahanRoutes = require("./routes/ruang-perkuliahan");
const beritaRoutes = require("./routes/berita");
const dosenWaliRoutes = require("./routes/dosen-wali");
const dosenPengajarKelasKuliah = require("./routes/dosen-pengajar-kelas-kuliah");
const pelimpahanMataKuliahRoutes = require("./routes/pelimpahan-mata-kuliah");
const mahasiswaBimbinganDosenRoutes = require("./routes/mahasiswa-bimbingan-dosen");
const ujiMahasiswaRoutes = require("./routes/uji-mahasiswa");
const pertemuanPerkuliahanRoutes = require("./routes/pertemuan-perkuliahan");
const presensiPerkuliahanRoutes = require("./routes/presensi-perkuliahan");
const nilaiPerkuliahanRoutes = require("./routes/nilai-perkuliahan");
const settingGlobalRoutes = require("./routes/setting-global");
const perguruanTinggiGuestRoutes = require("./routes/perguruan-tinggi-guest");
const jenisTagihanRoutes = require("./routes/jenis-tagihan");
const semesterAktifRoutes = require("./routes/semester-aktif");
const rekapTranskripNilaiRoutes = require("./routes/rekap-transkrip-nilai");
const rekapMahasiswaBelumKRSRoutes = require("./routes/rekap-mahasiswa-belum-krs");
const rekapJadwalKuliahRoutes = require("./routes/rekap-jadwal-kuliah");
const rekapPresensiKelasRoutes = require("./routes/rekap-presensi-kelas");

// route api local not done yet
const settingWSRoutes = require("./routes/setting-ws");

// import middleware
const middlewareLogRequest = require("./middlewares/logs");
const middlewareDatabaseConnection = require("./middlewares/database");
const errHandler = require("./middlewares/error-handler");
const checkToken = require("./middlewares/check-token");
// const checkBlacklist = require("./middlewares/checkBlacklist");

// running express server
const app = express();

// Middleware untuk melayani file statis
app.use("/src/storage", express.static(path.join(__dirname, "storage")));

// Import cronjob blacklisted token
const schedule = require("node-schedule");
const cleanExpiredTokens = require("./cronjobs/cronjobScheduler");

const rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;

// Atur penjadwalan tugas
schedule.scheduleJob(rule, function () {
  // Tambahkan kode untuk tugas yang ingin dijalankan
  cleanExpiredTokens();
});

const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Sesuaikan dengan domain frontend Anda
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengaktifkan cookies dan kredensial lainnya
};

app.use(cors(corsOptions));

// middleware log request
app.use(middlewareLogRequest);

// Uji koneksi ke database saat aplikasi dimulai
middlewareDatabaseConnection
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// middleware request json from client
app.use(express.json());

// route api feeder dikti
app.use("/api-feeder", checkToken, apiFeederRoutes);

app.use("/pengujian-performa", checkToken, pengujianPerformaRoutes);

// route api local done
app.use("/user", checkToken, userRoutes);
app.use("/auth", authRoutes);
app.use("/role", checkToken, roleRoutes);
app.use("/role-permission", checkToken, rolePermissionRoutes);
app.use("/agama", checkToken, agamaRoutes);
app.use("/negara", checkToken, negaraRoutes);
app.use("/wilayah", checkToken, wilayahRoutes);
app.use("/perguruan-tinggi", checkToken, perguruanTinggiRoutes);
app.use("/profil-pt", checkToken, profilPTRoutes);
app.use("/jalur-masuk", checkToken, jalurMasukRoutes);
app.use("/jenis-pendaftaran", checkToken, jenisPendaftaranRoutes);
app.use("/jenis-tinggal", checkToken, jenisTinggalRoutes);
app.use("/alat-transportasi", checkToken, alatTransportasiRoutes);
app.use("/status-mahasiswa", checkToken, statusMahasiswaRoutes);
app.use("/kebutuhan-khusus", checkToken, kebutuhanKhususRoutes);
app.use("/penghasilan", checkToken, penghasilanRoutes);
app.use("/jenis-sms", checkToken, jenisSMSRoutes);
app.use("/lembaga-pengangkatan", checkToken, lembagaPengangkatanRoutes);
app.use("/status-keaktifan-pegawai", checkToken, statusKeaktifanPegawaiRoutes);
app.use("/pangkat-golongan", checkToken, pangkatGolonganRoutes);
app.use("/pekerjaan", checkToken, pekerjaanRoutes);
app.use("/dosen", checkToken, dosenRoutes);
app.use("/biodata-dosen", checkToken, biodataDosenRoutes);
app.use("/jenjang-pendidikan", checkToken, jenjangPendidikanRoutes);
app.use("/prodi", checkToken, prodiRoutes);
app.use("/periode", checkToken, periodeRoutes);
app.use("/jenis-substansi", checkToken, jenisSubstansiRoutes);
app.use("/substansi", checkToken, substansiRoutes);
app.use("/substansi-kuliah", checkToken, substansiKuliahRoutes);
app.use("/mata-kuliah", checkToken, mataKuliahRoutes);
app.use("/tahun-ajaran", checkToken, tahunAjaranRoutes);
app.use("/fakultas", checkToken, fakultasRoutes);
app.use("/semester", checkToken, semesterRoutes);
app.use("/kurikulum", checkToken, kurikulumRoutes);
app.use("/detail-kurikulum", checkToken, detailKurikulumRoutes);
app.use("/penugasan-dosen", checkToken, penugasanDosenRoutes);
app.use("/matkul-kurikulum", checkToken, matkulKurikulumRoutes);
app.use("/kelas-kuliah", checkToken, kelasKuliahRoutes);
app.use("/detail-kelas-kuliah", checkToken, detailKelasKuliahRoutes);
app.use("/perhitungan-sks", checkToken, perhitunganSKSRoutes);
app.use("/biodata-mahasiswa", checkToken, biodataMahasiswaRoutes);
app.use("/mahasiswa", checkToken, mahasiswaRoutes);
app.use("/jenis-keluar", checkToken, jenisKeluarRoutes);
app.use("/pembiayaan", checkToken, pembiayaanRoutes);
app.use("/bidang-minat", checkToken, bidangMinatRoutes);
app.use("/riwayat-pendidikan-mahasiswa", checkToken, riwayatPendidikanMahasiswaRoutes);
app.use("/detail-nilai-perkuliahan-kelas", checkToken, detailNilaiPerkuliahanKelasRoutes);
app.use("/skala-nilai-prodi", checkToken, skalaNilaiProdiRoutes);
app.use("/riwayat-nilai-mahasiswa", checkToken, riwayatNilaiMahasiswaRoutes);
app.use("/peserta-kelas-kuliah", checkToken, pesertaKelasKuliahRoutes);
app.use("/perkuliahan-mahasiswa", checkToken, perkuliahanMahasiswaRoutes);
app.use("/detail-perkuliahan-mahasiswa", checkToken, detailPerkuliahanMahasiswaRoutes);
app.use("/periode-perkuliahan", checkToken, periodePerkuliahanRoutes);
app.use("/detail-periode-perkuliahan", checkToken, detailPeriodePerkuliahanRoutes);
app.use("/krs-mahasiswa", checkToken, krsMahasiswaRoutes);
app.use("/aktivitas-kuliah-mahasiswa", checkToken, aktivitasKuliahMahasiswaRoutes);
app.use("/jenis-aktivitas-mahasiswa", checkToken, jenisAktivitasMahasiswaRoutes);
app.use("/data-lengkap-mahasiswa-prodi", checkToken, dataLengkapMahasiswaProdiRoutes);
app.use("/aktivitas-mahasiswa", checkToken, aktivitasMahasiswaRoutes);
app.use("/anggota-aktivitas-mahasiswa", checkToken, anggotaAktivitasMahasiswaRoutes);
app.use("/konversi-kampus-merdeka", checkToken, konversiKampusMerdekaRoutes);
app.use("/transkrip-mahasiswa", checkToken, transkripMahasiswaRoutes);
app.use("/rekap-jumlah-mahasiswa", checkToken, rekapJumlahMahasiswaRoutes);
app.use("/rekap-khs-mahasiswa", checkToken, rekapKHSMahasiswaRoutes);
app.use("/rekap-krs-mahasiswa", checkToken, rekapKRSMahasiswaRoutes);
app.use("/angkatan", checkToken, angkatanRoutes);
app.use("/jabatan", checkToken, jabatanRoutes);
app.use("/unit-jabatan", checkToken, unitJabatanRoutes);
app.use("/sistem-kuliah", checkToken, sistemKuliahRoutes);
app.use("/sistem-kuliah-mahasiswa", checkToken, sistemKuliahMahasiswaRoutes);
app.use("/tagihan-mahasiswa", checkToken, tagihanMahasiswaRoutes);
app.use("/pembayaran-mahasiswa", checkToken, pembayaranMahasiswaRoutes);
app.use("/unsur-penilaian", checkToken, unsurPenilaianRoutes);
app.use("/bobot-penilaian", checkToken, bobotPenilaianRoutes);
app.use("/ruang-perkuliahan", checkToken, ruangPerkuliahanRoutes);
app.use("/berita", checkToken, beritaRoutes);
app.use("/dosen-wali", checkToken, dosenWaliRoutes);
app.use("/dosen-pengajar-kelas-kuliah", checkToken, dosenPengajarKelasKuliah);
app.use("/pelimpahan-mata-kuliah", checkToken, pelimpahanMataKuliahRoutes);
app.use("/mahasiswa-bimbingan-dosen", checkToken, mahasiswaBimbinganDosenRoutes);
app.use("/uji-mahasiswa", checkToken, ujiMahasiswaRoutes);
app.use("/pertemuan-perkuliahan", checkToken, pertemuanPerkuliahanRoutes);
app.use("/presensi-perkuliahan", checkToken, presensiPerkuliahanRoutes);
app.use("/nilai-perkuliahan", checkToken, nilaiPerkuliahanRoutes);
app.use("/setting-global", checkToken, settingGlobalRoutes);
app.use("/perguruan-tinggi-guest", perguruanTinggiGuestRoutes);
app.use("/jenis-tagihan", checkToken, jenisTagihanRoutes);
app.use("/semester-aktif", checkToken, semesterAktifRoutes);
app.use("/rekap-transkrip-nilai", checkToken, rekapTranskripNilaiRoutes);
app.use("/rekap-mahasiswa-belum-krs", checkToken, rekapMahasiswaBelumKRSRoutes);
app.use("/rekap-jadwal-kuliah", checkToken, rekapJadwalKuliahRoutes);
app.use("/rekap-presensi-kelas", checkToken, rekapPresensiKelasRoutes);

// route api local not done yet
app.use("/setting/ws", settingWSRoutes);

app.use(errHandler);

// runnning at port 4000 on localhost
app.listen(PORT, () => {
  console.log(`Server berhasil running di port ${PORT}`);
});
