const path= require('path');
const { validationResult } = require("express-validator")
const User = require("../models/Users")
const bcryptjs = require("bcryptjs");

const userController={
    login: (req,res)=>{
         res.render('user/login');
    },
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
       let userToCreate = {
          ...req.body,
          contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
          imagen: req.file.filename
       }

       User.create(userToCreate);
       return res.send("ok ! se guardó el usuario");
    },
    profile: (req,res)=>{
     res.render('user/profile');
    }
}
module.exports = userController;