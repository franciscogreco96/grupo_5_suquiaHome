const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/", productController.list);

router.get("/productCart", productController.cart);

router.get("/productDetail/:id", productController.detail);

router.get("/productCreation", productController.creation);

router.get("/productEdition/:id", productController.edition);

module.exports = router;



