const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Pangaea Publishing Server");
});

module.exports = router;
