const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

/* aplicamos multer (indica donde se guarda el archivo y darle un nombre unico)*/
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/img/products")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage:storage}); 

/*  controler require */
const productController = require("../controllers/productController");

router.get("/", productController.list);

router.get("/productCart", productController.cart);

router.get("/productDetail/:id", productController.detail);

router.get("/productCreation", productController.creation);
router.post("/", upload.single("imagen"), productController.store);

router.get("/productEdition/:id", productController.edition);

router.delete("/delete/:id", productController.delete)

module.exports = router;



