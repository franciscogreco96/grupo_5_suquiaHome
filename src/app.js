const express = require("express");
const app = express();
const path = require("path");

const mainRouter = require("./routes/mainRouter.js");
const productRouter = require("./routes/productRouter.js");

app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", mainRouter);

app.use("/product", productRouter);

