
const fs = require("fs");
const path = require("path");

/* ruta acceso archivo products.json */
const productsFilePath = path.join(__dirname, "../data/products.json") 

  let db= require("../database/models");  

const productController = {

   

    /* LIST CON SEQUELIZE */
    list:(req,res) =>{
        db.Products.findAll()
        .then(function(products){
           console.log(products);
             return res.render("product/productList", {products:products}); 
        })
    },
    /* CARRITO CON JSON */
    cart: (req, res) => {
        res.render("product/productCart")
    }, 

    /* CREACION CON SEQUELIZE */
    creation: (req, res) => {
        db.Products.findAll()
        .then(function(products){
            return res.render("product/productCreation");
        })
    },

    /* GUARDADO CON SEQUELIZE */
     store: (req,res)=>{ 
        db.Products.create({ 
            nombre: req.body.nombre, 
            precio: parseInt(req.body.precio), 
            color_id: req.body.colores,
            descripcion: req.body.descripcion, 
            categoria_id: req.body.categoria,
            imagen: req.file ? req.file.filename : "default-image.png", 
            stock: req.body.stock, 
            descuento: parseInt(req.body.descuento)
            
         }) 
         res.redirect("/product");

     },


    /* DETALLE CON SEQUELIZE */

    detail: function(req,res){
            db.Products.findByPk(req.params.id,{
                include: [{association:"color"}, { association:"categoria"}]
            })
            .then(function(product){
                res.render("productDetail", {product:product});
            }) 
     },
 

    /*  EDICION CON SEQUELIZE */

            edition: function(req,res){
                let pedidoProducto=db.Products.findByPk(req.params.id);

                Promise.All(pedidoProducto)
                .then(function([producto]){
                    res.render("productEdition", {product:product})
                })
            },


            /*ACTUALIZACION DE PRODUCTO  */

    update: (req,res)=>{
        db.Products.update({
            id: req.params.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            color_id:  req.body.colores,
            descripcion: req.body.descripcion,
            categoria_id: req.body.categoria,
            imagen: req.body.imagen,
            stock: req.body.stock,
            descuento: req.body.descuento
            
        }, {
            where:{
            id:req.params.id
            }
        });
        res.redirect("/product") 

         }, 


        /* BORRADO CON SEQUELIZE */

         delete: (req,res)=>{
            db.Products.destroy({
                where:{
                    id: req.params.id
                }
            })
        } 

     
}

module.exports = productController;