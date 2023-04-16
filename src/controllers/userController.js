const path= require('path');
const { validationResult } = require("express-validator")

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
       return res.send("Sin errores, okei todas las validaciones")
    },
    profile: (req,res)=>{
     res.render('user/profile');
    }
}
module.exports = userController;