const express = require("express");
const router = express.Router();

/**
 * GET initData
 *
 * @return JSON initData
 */
router.get("/initdata", async (req, res) => {
  try {
    const jsonFile = require('./mockjson/initdata.json'); // path of your json file
    res.json(jsonFile);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET structure data.
 *
 * @return JSON structure
 */
 router.get("/structure", async (req, res) => {
  try {
    const jsonFile = require('./mockjson/keypay.json'); // path of your json file
    res.json(jsonFile);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
