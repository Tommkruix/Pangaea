const express = require("express");

const router = express.Router();

router.post("/:topic", (req, res) => {
  const topic = req.params.topic;

  if (req.body.url) return res.send({ url: req.body.url, topic });

  return res.send({ data: req.body.data, topic });
});

module.exports = router;
