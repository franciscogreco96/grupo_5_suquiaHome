module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsCartDetail";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        producto_id:{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        carrito_compras_id:{
            allowNull: false,
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: "productcartdetail",
        timestamps: false 
    }
    const ProductCartDetail = sequelize.define(alias, cols, config);

    ProductCartDetail.associate = function(models){
        ProductCartDetail.belongsTo(models.ProductsCart, {
            as: "productcart",
            foreignKey: "carrito_compras_id"
        }),
        ProductCartDetail.hasMany(models.Products, {
            as: "products",
            foreignKey: "producto_id"
        })
    }

   

    return ProductCartDetail 
}