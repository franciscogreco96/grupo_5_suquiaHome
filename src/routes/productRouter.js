const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/productCart", productController.cart);

router.get("/productDetail", productController.detail);

router.get("/productCreation", productController.creation);

router.get("/productEdition", productController.edition);

module.exports = router;



