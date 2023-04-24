function userLoggedMiddleware(req,res,next){
 
    res.locals.isLogged= false;
        
    if(req.session.userLogged){
        res.locals.isLogged=true;
        res.locals.userLogged= req.session.userLogged;
    }

    next();

}

module.exports= userLoggedMiddleware;


/* 1:25 del video muestra como cambiar header para datos del usuario logeado o no*/