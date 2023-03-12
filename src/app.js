const express = require("express");
const app = express();
const path = require("path");

/* importando los enrutadores */
const mainRouter = require("./routes/mainRouter.js");
const productRouter = require("./routes/productRouter.js");
const userRouter = require("./routes/userRouter.js");

/* usando recursos estaticos public para evitar path.resolve */
app.use(express.static(path.join(__dirname, "../public")));

/* usando el mmotor de plantillas */
app.set("view engine", "ejs");

/* para evitar usar path.resolve */
app.set("views", path.resolve(__dirname, "views"));

/* Usando los enrutadores importados */
app.use("/", mainRouter);

app.use("/product", productRouter);

app.use("/user", userRouter);

/* levantando el servidor */
app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));


//Ruta para ingreso a creacion de produto

/* app.get("/productCreation", function(req,res){
    res.render(path.join(__dirname,"./views/products/productCreation.ejs" ))
}) */

//Ruta para ingreso a edicion de produto

/* app.get("/productEdition", function(req,res){
    res.render(path.join(__dirname,"./views/products/productEdition.ejs" ))
}) */
