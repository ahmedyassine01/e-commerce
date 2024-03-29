const express = require("express");
const { createCart } = require("../controllers/cart.controller");

router = express.Router();

router.post("/cart/addItem", createCart);

module.exports = router;