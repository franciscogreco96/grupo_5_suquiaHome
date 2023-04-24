const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");

app.use(session({
    secret: 'SHH',
    resave: false,
    saveUninitialized: false,
}));
/* importando los enrutadores */
const mainRouter = require("./routes/mainRouter.js");
const productRouter = require("./routes/productRouter.js");
const userRouter = require("./routes/userRouter.js");

/* Middlewares*/
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));



/* middlewares de para tipos de usuarios */
 const guestMiddleware= require("./middlewares/guestMiddleware"); /* se usa en get de login y get de registro */
 const authMiddleware= require("./middlewares/authMiddleware"); /* se usa en get profile */
 const userLoggedMiddleware= require('./middlewares/userLoggedMiddleware');

 /*app.use(userLoggedMiddleware); */




/* usando el motor de plantillas */
app.set("view engine", "ejs");

/* para evitar usar path.resolve para acceder a la vistas */
app.set("views", path.resolve(__dirname, "views"));

/* Usando los enrutadores importados */
app.use("/", mainRouter);

app.use("/product", productRouter);

app.use("/user", userRouter);

/* levantando el servidor */
app.listen (3003, () => console.log("Servidor corriendo en el puerto 3003"));