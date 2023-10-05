const express = require("express");
const router = express.Router();
const upload = require("../helpers/multer");
const { registr } = require("../contrillers/studentController");

router.route("/registr").post(upload.single("photo"), registr);

module.exports = router;
