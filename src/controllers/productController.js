
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
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let id=req.params.id
        
        let product= products.find(product=>product.id==id)

        res.render("product/productDetail", {product})
    },

    edition: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let id=req.params.id

        /* Buscamos producto */
        let productToEdit= products.find(product=> product.id==id);

        res.render("product/productEdition", {productToEdit})
    },
    update: (req,res, next)=>{

        /* para validar archivos con multer */

        const file = req.file
        if(!file){
            const error = new Error(" Por favor seleccione un archivo");
            error.httpStatusCode = 400;
            return next(error);
        };

        let id = req.params.id
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); 

        let productSinEdit= products.find(product=> product.id==id);

    /* Creamos producto donde pasamos los parametros recibimos */
        let productoEditado = {
			id: id,
			nombre: req.body.nombre,
			precio: parseInt(req.body.precio),
			categoria: req.body.categoria,
            colores: req.body.colores,
			descripcion: req.body.descripcion,
			imagen: req.file ? req.file.filename : productSinEdit.imagen,
		};
        /* Buscamos en el json el producto */
        let indice = products.findIndex (product=>{
            return product.id == id;
        })
            /* Reemplazamos el producto editado (sobrescribiendolo) */
            products[indice]=productoEditado;

        /* Pasamos a Json y lo agregamos*/
        let productsJSON = JSON.stringify(products, null, " ");

        fs.writeFileSync(productsFilePath, productsJSON);

        /* Redireccionar */
        res.redirect("/product");
    },

    creation: (req, res) => {
        res.render("product/productCreation")
    },
    
    store: (req, res) => {
        const file = req.file
        if(!file){
            const error = new Error(" Por favor seleccione un archivo");
            error.httpStatusCode = 400;
            return next(error);
        }

        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        let productoNuevo = {
            id: products[products.length -1].id + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            colores: req.body.colores,
            precio: parseInt(req.body.precio),
            descuento: parseInt(req.body.descuento),
            imagen: req.file ? req.file.filename : "default-image.png",
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