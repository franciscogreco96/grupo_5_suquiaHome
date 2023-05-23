

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
            type: dataTypes.STRING(255)
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING(255)
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING(255)
        },
        password:{
            allowNull: false,
            type: dataTypes.STRING
        },
        categoria_id: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
        },
        imagen: {
            type: dataTypes.BOOLEAN,
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
        timestamps: false
    };
    const User= sequelize.define(alias,cols, config);


    /* TESTEAR SI FUNCIONA CON UNA CONSULTA */
     User.associate= function(models){
        User.belongsTo(models.UsersCategory,{
            as: "userscategory",
            foreignKey: "categoria_id"
        }),
       
        User.hasMany(models.ProductsCart,{
            as: "productcart",
            foreignKey: "id_carrito_compras"
        })
    } 
     

    return User;
}