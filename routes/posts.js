const router = require("express").Router();

// テスト用callback関数
router.get("/", (req, res) => {
  res.send("posts router");
});

module.exports = router;
