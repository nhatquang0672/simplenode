const express = require("express");
const router = express.Router();

/**
 * GET initData
 *
 * @return JSON initData
 */
router.get("/initdata", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: {"abcde":"aabb", "adu": 1},
      data: JSON.stringify({a : 1, b: 2, "c": 3}),
    });
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
    res.json({
      status: 200,
      message: {"abcde":"aabb", "adu": 1},
      data: JSON.stringify({a : 1, b: 2, "c": 3}),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

/**
 * GET available categories of Mylla Mycullough.
 *
 * @return JSON structure
 */
 router.get("/categories", async (req, res) => {
  try {
    res.json('/mockjson/getAvailableCategories.json');
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});


module.exports = router;
