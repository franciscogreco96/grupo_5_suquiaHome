const express = require("express");
const router = express.Router();

/*  controler require */
const productApiController = require("../../controllers/api/productApiController");


router.get("/", productApiController.list);

router.get("/categoria", productApiController.listCategories);

/* DETALLE PRODUCTO */
router.get("/productDetail/:id", productApiController.detail);




module.exports = router;