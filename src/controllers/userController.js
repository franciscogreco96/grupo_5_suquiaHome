const path= require('path');
const { validationResult } = require("express-validator")
const User = require("../models/Users")
const bcryptjs = require("bcryptjs");
const { log } = require('console');

const db = require("../database/models");

const userController={

/* SEQUELIZE CRUD */
   register:(req, res) => {
      db.Users.findAll()
      .then(function(users){
         return res.render("user/register")
      })
   },

   store: (req, res)=>{
      db.Users.create({
         first_name: req.body.nombre,
         last_name: req.body.apellido,
         email: req.body.email,
         password: req.body.contrasena,
         categoria_id: req.body.categoria,
         imagen: req.file.filename,
         telefono: req.body.telefono,
         /* id_carrito_compras: , */

      })
   },
   edit: (req, res)=>{
      db.Users.findByPk(req.params.id)
         .then((user)=>{
            res.render("user/edit", {user:user})
         })
   },
   update:(req, res)=>{
      db.Users.update({
         first_name: req.body.nombre,
         last_name: req.body.apellido,
         email: req.body.email,
         password: req.body.contrasena,
         categoria_id: req.body.categoria,
         imagen: req.file.filename,
         telefono: req.body.telefono,
         /* id_carrito_compras: , */
      }), {
         where:{
            id:req.params.id
         }
      }
      res.redirect("/user/edit/" + req.params.id)
   },


    login: (req,res)=>{
      res.render('user/login');
      },
    
    processLogin: (req,res) =>{
      let userToLogin = User.findByField("email", req.body.email);

      if(userToLogin){

         let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena);
         if(isOkThePassword){
            delete userToLogin.contrasena;
            delete userToLogin.confirmarContrasena;
            req.session.userLogged = userToLogin;

            if(req.body.recordar_contrasena){
               res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 })
            }

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
      console.log(req.cookies.userEmail)
     return  res.render('user/profile',{
         user: req.session.userLogged
      });
     },

     logout: (req,res) =>{
      res.clearCookie("userEmail");
      req.session.destroy();
      return res.redirect('/');
     }
}
module.exports = userController;