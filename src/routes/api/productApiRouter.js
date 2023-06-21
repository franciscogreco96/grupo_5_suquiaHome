const express = require("express");
const router = express.Router();

/*  controler require */
const productApiController = require("../../controllers/api/productApiController");


router.get("/", productApiController.list);



module.exports = router;