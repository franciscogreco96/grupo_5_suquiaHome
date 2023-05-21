module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCartsDetail";
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
        timestamps: false /* si mi tabla no tiene create_date ni update_date porque si no coloco esta propiedad no me va a funcionar */
    }
    const ProductCartDetail = sequelize.define(alias, cols, config);

    ProductCartDetail.associate = function(models){
        ProductCartDetail.hasMany(models.Products, {
            as: "productos",
            foreignKey: "color_id"
        })
    }

    return ProductColor
}