
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
    
    store: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf8"));

        let productoNuevo = {
            id: products[products.length -1].id + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            colores: req.body.colores,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.body.imagen
        };

        products.push(productoNuevo);

        let productJSON = JSON.stringify(products, null, " ");

        fs.writeFileSync(productsFilePath, productJSON);

        res.redirect("/product");
        
    },

    delete: (req, res) => {
       const id = req.params.id;
       const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
       let finalProducts = products.filter(product =>{
        return product.id != id;
       })

       let productsJSON = JSON.stringify(finalProducts, null, "");

       fs.writeFileSync(productsFilePath, productsJSON);

       res.redirect("/product");
    }

}

module.exports = productController;