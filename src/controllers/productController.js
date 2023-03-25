
const fs = require("fs");
const path = require("path");

/* ruta acceso archivo products.json */
const productsFilePath = path.join(__dirname, "../data/products.json") 

const productController = {

    list:(req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("product/productList", { products })
    },
    cart: (req, res) => {
        res.render("product/productCart")
    },
    detail: (req, res) => {
        res.render("product/productDetail")
    },
    edition: (req, res) => {
        res.render("product/productEdition")
    },
    creation: (req, res) => {
        res.render("product/productCreation")
    },

}

module.exports = productController;