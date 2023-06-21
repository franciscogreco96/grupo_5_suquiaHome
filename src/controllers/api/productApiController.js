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

}

module.exports = productApiController;