const express = require("express");
const router = express.Router();

router.use("/campus", require("./campus"));
router.use("/students", require("./student"));

module.exports = router;
