const express = require("express");
const app = express();
const path = require("path");

app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));

app.use(express.static(path.join(__dirname, "../public")));

/* Ruta para ingreso al inicio */
app.get("/home", function(req, res){
    res.render(path.join(__dirname, "./views/index.ejs"))
});

/* Ruta para ingreso a detalle de producto */
app.get("/productDetail", function(req, res){
    res.render(path.join(__dirname, "./views/products/productDetail.ejs"))
});

/* Ruta para ingreso a carrito de compras */
app.get("/productCart", function(req, res){
    res.render(path.join(__dirname, "./views/products/productCart.ejs"))
});

/* Ruta para ingreso a formulario registro */
app.get("/register", function(req, res){
    res.render(path.join(__dirname, "./views/users/register.ejs"))
});

/* Ruta para ingreso a formulario login */
app.get("/login", function(req, res){
    res.render(path.join(__dirname, "./views/users/login.ejs"))
});

