const express = require("express");

const router = express.Router();

// import controller dan middleware
const RekapTranskripNilaiController = require("../controllers/rekap-transkrip-nilai");
const checkRole = require("../middlewares/check-role");

// all routes
router.post("/get-rekap-transkrip-nilai", checkRole(["admin", "admin-prodi", "mahasiswa"]), RekapTranskripNilaiController.getRekapTranskripNilaiByFilterReqBody);

module.exports = router;