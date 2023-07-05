const fs = require("fs");
const path = require("path");

  let db= require("../../database/models");  
const { Module } = require("module");

const productApiController = {

    /* LIST USANDO APIS */
    list:(req,res) =>{
        db.Products.findAll()
        .then(function(products){
             return res.json({
                total: products.length,
                data: products,
                status: 200
             }
                
             ); 
        })
    },
    listCategories: (req, res) => {
        db.ProductsCategory.findAll()
        .then(function(categories){
             return res.json({
                total: categories.length,
                data: categories,
                status: 200
             }
                
             ); 
        })
    } ,

    detail: (req,res) =>{
        db.Products.findByPk(req.params.id,{
            include: [{association:"productscolors"}, { association:"productsCategories"}]
        })
        .then(function(product){
           return res.json({
                data:product
            });
        }) 
    }

}

module.exports = productApiController;