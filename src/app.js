const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));


// Importamos los distintos enrutadores
const mainRouter = require("../routes/mainRouter.js");

//REEMPLAZO LOS 2 ARCHIVOS POR 1 DE USER ROUTER
/* const loginRouter = require("../routes/mainRouter.js");
const registerRouter = require("../routes/mainRouter.js"); */

const loginRouter = require("../routes/loginRouter.js");
const productCartRouter = require("../routes/productCartRouter.js");
const productDetailRouter = require("../routes/productDetailRouter.js");



// Similar a los recursos estáticos, es para evitar poner el path.resolve para enviar los archivos html
app.set('views', path.resolve(__dirname, 'views'));

// Uso de EJS 
app.set("view engine", "ejs");

//LLamado del rutas importadas
app.use("/", mainRouter);  // Enlazado del home correcto , funcional

app.use("/login", loginRouter);



//Ponemos a escuchar el SV
app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));


/* Ruta para ingreso al inicio */
/* app.get("/home", function(req, res){
    res.render(path.join(__dirname, "./views/index.ejs"))
}); */

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
/* app.get("/login", function(req, res){
    res.render(path.join(__dirname, "./views/users/login.ejs"))
}); */

