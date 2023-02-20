const express = require("express");
const app = express();
const path = require("path");

app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

/* Ruta para ingreso a detalle de producto */
app.get('/productDetail.html', function(req, res){
    res.sendFile(path.join(__dirname, "./views/productDetail.html"))
});

