const express = require("express");

const router = express.Router();

// import controller dan middleware
const DetailKelasKuliahController = require("../controllers/detail-kelas-kuliah");
const checkRole = require("../middlewares/check-role");

// all routes
router.get("/", checkRole(["admin", "admin-prodi"]), DetailKelasKuliahController.getAllDetailKelasKuliah);
router.get("/:id/get", checkRole(["admin", "admin-prodi"]), DetailKelasKuliahController.getDetailKelasKuliahById);
router.get("/filter/:id_prodi/:id_semester/get", checkRole(["admin", "admin-prodi"]), DetailKelasKuliahController.getDetailKelasKuliahByProdiAndSemesterId);

module.exports = router;
