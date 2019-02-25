/**
 * Main application routes
 */

const express = require("express");
const ibanRoute = require("./controllers/iban/index");

const router = express.Router();

module.exports = function routing(app) {
  // Insert routes below
  router.use("/iban", ibanRoute);

  // Set a prefix for all calls
  app.use("/api/v1", router);
};
