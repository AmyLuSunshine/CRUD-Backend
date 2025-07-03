const express = require("express");
const router = express.Router();

router.use("/campuses", require("./campuses"));
router.use("/student", require("./student"));

module.exports = router;
