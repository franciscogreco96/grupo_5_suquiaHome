const { INTEGER, TINYINT, DECIMAL } = require("sequelize");

module.exports= (sequelize, dataTypes) => {
    let alias= "Usuarios";
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
    const Usuario= sequelize.define(alias,cols, config);


    /* TESTEAR SI FUNCIONA CON UNA CONSULTA */
     Usuario.associate= function(models){
        Usuario.hasMany(models.UserCategory,{
            as: "usercategory",
            foreignKey: "categoria_id"
        })
    } 

    return Usuario;
}