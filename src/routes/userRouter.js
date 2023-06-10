const express= require('express');
const router= express.Router();
const multer= require("multer");
const path= require("path");
const { body } = require("express-validator");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "public/img/users")
    },
    filename:(req, file, cb) => {
        console.log(file);
        cb(null, "../../img/users/" + file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    },
});

const uploadFile = multer({ storage });

const validations = [
    body("nombre").notEmpty().withMessage("Debe completar con su nombre"),
    body("apellido").notEmpty().withMessage("Debe completar con su apellido"),
    body("email")
    .notEmpty().withMessage("Debe escribir un e-mail correcto").bail()
    .isEmail().withMessage("Debe escribir un e-mail válido"),
    body("telefono").notEmpty().withMessage("Debe completar un numero telefonico"),
    body("fotoPerfil").custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif", ".pdf"];
        if (!file){
            throw new Error ("Tienes que subir una imagen ")
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ("Las extensiones de archivo permitidas son .jpg, .png, .gif, .pdf" )
            }
        }
        return true;
    })
];

/* MIDDLEWARES DE SESSION*/
const guestMiddleware= require("../middlewares/guestMiddleware"); 
const authMiddleware= require("../middlewares/authMiddleware"); 


const userController= require('../controllers/userController');

/* SECCION RUTAS USUARIO */
/* rutas para logueo de usuario */
router.get('/login',guestMiddleware, userController.login);

/* Ruta proceso de login */
router.post('/login', userController.processLogin);

/* rutas para registro de usuario */
router.get('/register',guestMiddleware, userController.register);
router.post('/register', uploadFile.single("fotoPerfil"), validations, userController.store);

/* ruta para editar usuario */
router.get('/edit/:id', userController.edit);
router.post('/edit/:id',uploadFile.single("fotoPerfil"), userController.update);


/* Rutas para ver perfil de usuario */
router.get('/profile',authMiddleware,  userController.profile);

/* Rutas para borrar sesion */
router.get('/logout/',authMiddleware,  userController.logout);




module.exports = router;