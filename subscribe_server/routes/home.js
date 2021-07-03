const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Pangaea Subscribing Server");
});

module.exports = router;
