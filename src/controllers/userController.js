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

       /* Verificando si el email no esa registrado */
       let userInDB= User.findByField('email',req.body.email);
      
       if(userInDB){
         return res.render('user/register', {
         errors: {
               email: {
                     msg: 'Este email ya esta registrado'
               }
            },
            /* queda doble el campo email al encontrar un error */
            
          oldData: req.body
         });
      }

       let userToCreate = {
          ...req.body,
      /*     constraseña:  bcryptjs.hashSync(req.body.contraseña, 10), */
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
      let userToLogin= User.findByField('email',req.body.email);
      if(userToLogin){

         /*  CHEQUEO DE PASSWORD ENCRIPTADA */

         /* let chequeoPassword= bcryptjs.compareSync(req.body.contraseña,userToLogin.contraseña);

         if(chequeoPassword){
         return res.redirect('user/profile')
         } */
          req.session.userLogged=userToLogin; 
        
         return res.redirect('/user/profile')
      }

   /* no aparece el error si esta registrado, solo recarga el login */
      return res.render('user/login', {
   errors: {
      email: { 
         msg: 'Este email no esta registrado'
      }
   }
})
      

    },
    profile: (req, res)=>{

      /* retorno de la variable para reutilizar datos de la session 1:05 video*/

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