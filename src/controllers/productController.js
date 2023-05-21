
const fs = require("fs");
const path = require("path");

/* ruta acceso archivo products.json */
const productsFilePath = path.join(__dirname, "../data/products.json") 

  let db= require("../database/models/Product.js");  

const productController = {

   

    /* LIST CON SEQUELIZE */
    /* list:(req,res) =>{
        db.Products.findAll()
        .then(function(products){
            return res.render("productList", {products:products});
        })
    }, */
    /* CREACION CON SEQUELIZE */
    /* creation: (req, res) => {
        db.Products.findAll()
        .then(function(products){
            return res.render("productCreation");
        })
    }, */

    /* GUARDADO CON SEQUELIZE */
    /* store: (req,res)=>{ */
       /*  db.Products.create({ */
            /* id: , */
            /* nombre: req.body.nombre, */
            /* precio: req.body.precio, */
           /*  color_id:   , */
            /* descripcion: req.body.descripcion, */
            /* categoria_id: , */
            /* imagen: req.body.imagen, */
            /* stock: req.body.stock, */
            /* descuento: req.body.descuento */
            
        /* }) */
    /* }, */


    /* DETALLE CON SEQUELIZE */

   /*  detail: function(req,res){
            db.Products.findByPk(req.params.id,{
                include: [{association:"color"}, { association:"categoria"}]
            })
            .then(function(product){
                res.render("productDetail", {product:product});
            }) */
    /* } */
 

    /*  EDICION CON SEQUELIZE */

            /* edition: function(req,res){
                let pedidoProducto=db.Products.findByPk(req.params.id);

                Promise.All(pedidoProducto)
                .then(function([producto]){
                    res.render("productEdition", {product:product})
                })
            } */


            /*ACTUALIZACION DE PRODUCTO  */

    /*update: (req,res)=>{ */
       /*  db.Products.update({ */
            /* id: , */
            /* nombre: req.body.nombre, */
            /* precio: req.body.precio, */
            /*  color_id:   , */
            /* descripcion: req.body.descripcion, */
            /* categoria_id: , */
            /* imagen: req.body.imagen, */
            /* stock: req.body.stock, */
            /* descuento: req.body.descuento */
            
        /* }, {
            where:{
            id:req.params.id
            }
        });
        res.redirect("/product") */

        /* }, */


        /* BORRADO CON SEQUELIZE */

        /* delete: (req,res)=>{
            db.Products.destroy({
                where:{
                    id: req.params.id
                }
            })
        } */




        

     /* ------------------METODOS CON JSON------------------ */
    /* LIST CON JSON */

     list:(req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("product/productList", { products })
    }, 


     /* CREACION CON JSON */
     creation: (req, res) => {
        res.render("product/productCreation")
    }, 

    /* CARRITO CON JSON */
     cart: (req, res) => {
        res.render("product/productCart")
    }, 


    /*  DELETE CON JSON */
     delete: (req, res) => {
       const id = req.params.id;
       const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
       let finalProducts = products.filter(product =>{
        return product.id != id;
       })

       let productsJSON = JSON.stringify(finalProducts, null, "");

       fs.writeFileSync(productsFilePath, productsJSON);

       res.redirect("/product");
    },



    /* STORE/GUARDADO CON JSON */
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
    /* DETAIIL CON JSON */
     detail: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let id=req.params.id
        
        let product= products.find(product=>product.id==id)

        res.render("product/productDetail", {product})
    }, 
/* EDITION CON JSON */
edition: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let id=req.params.id

    /* Buscamos producto */
    let productToEdit= products.find(product=> product.id==id);

    res.render("product/productEdition", {productToEdit})
},
/*  UPDATE CON JSON */
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
        descuento: req.body.descuento,
        imagen: req.file ? req.file.filename : productSinEdit.imagen
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


}

module.exports = productController;