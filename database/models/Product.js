
module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nombre:{
            allowNull: false,
            type: dataTypes.STRING
        } ,
        precio:{
            allowNull: false,
            type: dataTypes.FLOAT
        } ,
        color_id:{
            allowNull: false,
            type: dataTypes.INTEGER
        } ,
        descripcion:{
            type: dataTypes.TEXT
        } ,
        categoria_id:{
            type: dataTypes.INTEGER
        } ,
        imagen:{
            type: dataTypes.BOOLEAN
        } ,
        stock:{
            type: dataTypes.DECIMAL
        } ,
        descuento:{
            type: dataTypes.FLOAT
        }
    };
    let config = {
        tableName: "products",
        timestamps: false /* si mi tabla no tiene create_date ni update_date porque si no coloco esta propiedad no me va a funcionar */
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.ProductColors, {
            as: "color",
            foreignKey: "color_id"
        })
    }
    Product.associate = function(models){
        Product.belongsTo(models.ProductsCategory, {
            as: "categoria",
            foreignKey: "categoria_id"
        })
    }
    return Product
}