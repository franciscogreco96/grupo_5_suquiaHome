const path= require('path');

const controlador={
    login: (req,res)=>{
         res.render('login.ejs');
    }

}
module.exports =controlador;