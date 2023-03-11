const path= require('path');

const controlador={
    index: (req,res)=>{
         res.render('index.ejs');
    }

}
module.exports =controlador;
