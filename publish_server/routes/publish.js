const express = require("express");
const axios = require("axios");
const logger = require("../middlewares/logger");

const router = express.Router();

router.post("/:topic", async (req, res) => {
  const topic = req.params.topic;
  const data = req.body.data;
  const newPublish = {
    data,
  };

  // send to subscribe server
  try {
    const resp = await axios.post(
      `http://localhost:9000/api/subscribe/${topic}`,
      newPublish
    );
    return res.status(200).send(resp.data);
  } catch (err) {
    logger.warn(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
