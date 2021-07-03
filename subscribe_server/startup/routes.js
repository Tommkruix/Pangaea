const express = require("express");
const cors = require("cors");

const home = require("../routes/home");
const subscribe = require("../routes/subscribe");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/", home);
  app.use("/api/subscribe", subscribe);

  app.use(error);
};
