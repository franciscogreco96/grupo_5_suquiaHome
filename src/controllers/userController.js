const path= require('path');
const { validationResult } = require("express-validator")
const User = require("../models/Users")
const bcryptjs = require("bcryptjs");
const { log } = require('console');

const userController={
    register: (req,res)=>{
         res.render('user/register');
    },
    store: (req, res)=>{
       const resultValidation = validationResult(req);
       if(resultValidation.errors.length > 0){
          return res.render("user/register",{
          errors: resultValidation.mapped(),
          oldData: req.body
     });
       }

       /* Verificando si el email no está registrado */
       let userInDB= User.findByField('email',req.body.email);
      
       if(userInDB){
         return res.render('user/register', {
         errors: {
               email: {
                     msg: 'Este email ya está registrado'
               }
            },
            /* queda doble el campo email al encontrar un error */
            
          oldData: req.body 
         });
      }

       let userToCreate = {
          ...req.body,
          contrasena:  bcryptjs.hashSync(req.body.contrasena, 10),
          confirmarContrasena:  bcryptjs.hashSync(req.body.confirmarContrasena, 10),
          imagen: req.file.filename
       }

       let userCreated= User.create(userToCreate);
       return res.render('user/login');
    },


    login: (req,res)=>{
      res.render('user/login');
      },
    /* min 40 a 60 aprox de video, no aparecen los errores ni envia a la vista de perfil, solo recarga el login */
    processLogin: (req,res) =>{

      let userToLogin = User.findByField("email", req.body.email);

      if(userToLogin){

         let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena);
         if(isOkThePassword){
            delete userToLogin.contrasena;
            delete userToLogin.confirmarContrasena;
            req.session.userLogged = userToLogin;
            return res.redirect("/user/profile");
         }

      return res.render('user/login', {
         errors: {
            email:{
               msg: "Las credenciales son inválidas"
            }
         }
      });
   }
   
      return res.render('user/login', {
         errors: {
            email:{
               msg: "No se encuentra este email en nuestra base de datos"
            }
         }
      })
    },
    profile: (req, res)=>{
     return  res.render('user/profile',{
         user: req.session.userLogged
      });
     },

     logout: (req,res) =>{
      req.session.destroy();
      return res.redirect('/')
     }
}
module.exports = userController;