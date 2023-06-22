const fs = require("fs");
const path = require("path");

  let db= require("../../database/models");  
const { Module } = require("module");

const userApiController = {
/* LIST USANDO APIS */

list:(req,res) =>{
  db.Users.findAll()
  .then(function(users){
       return res.json({
          total: users.length,
          data: users,
          status: 200
       }
          
       ); 
  })
},

detail: (req,res) =>{
  db.Users.findByPk(req.params.id)
  .then(function(user){
      res.json({
          data:user
      });
  }) 
}
    

}

module.exports = userApiController;