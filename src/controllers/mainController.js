let db= require("../database/models"); 
const mainController = {
    index: (req, res) => {
        db.Products.findAll()
        .then(function(products){
             return res.render("index", {products:products}); 
        })
    },
    

};

module.exports = mainController