const productController = {
    cart: (req, res) => {
        res.render("products/productCart")
    },
    detail: (req, res) => {
        res.render("products/productDetail")
    },
    edition: (req, res) => {
        res.render("products/productEdition")
    },
    creation: (req, res) => {
        res.render("products/productCreation")
    },

}

module.exports = productController;