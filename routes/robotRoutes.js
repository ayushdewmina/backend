const express = require("express");
const { getRobots } = require("../controllers/robotController");

const router = express.Router();
router.get("/", getRobots);

module.exports = router;
