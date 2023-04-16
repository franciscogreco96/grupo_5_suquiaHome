const express= require('express');
const router= express.Router();
const multer= require("multer");
const path= require("path");
const { body } = require("express-validator");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "public/img/avatars")
    },
    filename:(req, file, cb) => {
        console.log(file);
        cb(null, "../../img/avatars/" + file.fieldname + "-" + Date.now() + path.extname(file.originalname))
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
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        if (!file){
            throw new Error ("Tienes que subir una imagen ")
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ("Las extensiones de archivo permitidas son .jpg, .png, .gif" )
            }
        }
        return true;
    })
];



const userController= require('../controllers/userController');

/* rutas para logueo de usuario */
router.get('/login', userController.login);

/* rutas para registro de usuario */
router.get('/register', userController.register);
router.post('/register', uploadFile.single("fotoPerfil"), validations, userController.store);

/* Rutas para ver perfil de usuario */
router.get('/profile', userController.profile);


module.exports = router;