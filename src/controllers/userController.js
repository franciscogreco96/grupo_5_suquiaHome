const path= require('path');
const { validationResult } = require("express-validator")
const fs = require ("fs")
const User = require("../models/Users")
const bcryptjs = require("bcryptjs");
const { log } = require('console');
const usersFilePath = path.join(__dirname,"../data/users.json")

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

      let errores = validationResult(req);


      //si hay errores, retornarlos a la vista
      if (!errores.isEmpty()) {
        let errors = errores.mapped();
        console.log(errors);
        return res.render("user/register", { errors: errors, olds: req.body });
      } 

     db.Users.create({
         first_name: req.body.nombre,
         last_name: req.body.apellido,
         email: req.body.email,
         password: bcryptjs.hashSync(req.body.contrasena,10),
         categoria_id: req.body.categoria,
         imagen: req.file ? req.file.filename : "default-image.png", 
         telefono: req.body.telefono,
         /* id_carrito_compras: , */
   
      })
      /* FALTA VALIDACION DE DATOS  */
      .then(()=>{
         res.redirect("/user/profile")
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
     db.Users.findOne(
         {
            where: {
               email: req.body.email
            }})
            .then(userToLogin => {
               
               if(userToLogin){
                  console.log(userToLogin);
                           let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.password);
                           if(isOkThePassword){
                              delete userToLogin.password;
                              req.session.userLogged = userToLogin;
                               
                              return res.redirect("/user/profile");
                  
                              /* if(req.body.recordar_contrasena){
                                 res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 })
                              }
                  
                              return res.redirect("user/profile"); */
                           }else{
                  
                        return res.render('user/login', {
                           errors: {
                              email:{
                                 msg: "Las credenciales son inválidas"
                              }
                           }
                        })
                     }
                     }else{
                     
                        return res.render('user/login', {
                           errors: {
                              email:{
                                 msg: "No se encuentra este email en nuestra base de datos"
                              }
                           }
                        })
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