const express = require("express");
const router = express.Router();
//const ducksRouter = require("./ducks");
const campusRouter = require("./campus");
const studentRouter = require("./student");

//router.use("/ducks", ducksRouter);
router.use("/students", studentRouter);
router.use("/campuses", campusRouter);

module.exports = router;
