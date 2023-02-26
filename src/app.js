const express = require("express");
const app = express();
const path = require("path");

app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));

app.use(express.static(path.join(__dirname, "../public")));

/* Ruta ára ingreso al inicio */
app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

/* Ruta para ingreso a detalle de producto */
app.get("/productDetail", function(req, res){
    res.sendFile(path.join(__dirname, "./views/productDetail.html"))
});

/* Ruta para ingreso a carrito de compras */
app.get("/productCart", function(req, res){
    res.sendFile(path.join(__dirname, "./views/productCart.html"))
});

/* Ruta para ingreso a formulario registro */
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "./views/register.html"))
});

/* Ruta para ingreso a formulario login */
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "./views/login.html"))
});

