const { INTEGER, TINYINT, DECIMAL } = require("sequelize");

module.exports= (sequelize, dataTypes) => {
    let alias= "Users";
    let cols= {
        id: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            allowNull: false,
            type: dataTypes.varchar(255)
        },
        last_name: {
            allowNull: false,
            type: dataTypes.varchar(255)
        },
        email: {
            allowNull: false,
            type: dataTypes.varchar(255)
        },
        password:{
            allowNull: false,
            type: dataTypes.text()
        },
        categoria_id: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
        },
        imagen: {
            type: dataTypes.TINYINT(11),
        },
       telefono: {
            type: dataTypes.DECIMAL(10,0),
        },
        id_carrito_compras: {
            type: dataTypes.INTEGER(11),
        },

    };
    let config= {
        tableName: "users",
        timeStamps: false
    };
    const User= sequelize.define(alias,cols, config);


    /* TESTEAR SI FUNCIONA CON UNA CONSULTA */
     User.associate= function(models){
        User.belongsTo(models.UsersCategory,{
            as: "userscategory",
            foreignKey: "categoria_id"
        })
    } 
     User.associate= function(models){
        User.hasMany(models.ProductsCart,{
            as: "productcart",
            foreignKey: "usuario_id"
        })
    } 

    User.associate= function(models){
        User.hasMany(models.ProductsCart,{
            as: "productcart",
            foreignKey: "usuario_id"
        })
    }

    return Usuario;
}