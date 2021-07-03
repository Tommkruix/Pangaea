const logger = require("./middlewares/logger");

const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/prod")(app);

const port = process.env.PORT || 9000;
const server = app.listen(port, () => log(port));

function log(port) {
  logger.info(`Listening on port ${port}...`);
  console.log(`Listening on port ${port}...`);
}

module.exports = server;
