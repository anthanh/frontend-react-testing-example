const express = require("express");
const IbanController = require("./iban.controller.js");

const router = express.Router();

//GET
router.get("/:iban", IbanController.validateIbanChecksum);

module.exports = router
