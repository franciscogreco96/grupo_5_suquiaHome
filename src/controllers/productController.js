const productController = {
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