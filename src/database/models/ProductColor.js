module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsColor";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color:{
            allowNull: false,
            type: dataTypes.STRING(255)
        } 
    };
    let config = {
        tableName: "productscolor",
        timestamps: false /* si mi tabla no tiene create_date ni update_date porque si no coloco esta propiedad no me va a funcionar */
    }
    const ProductColor = sequelize.define(alias, cols, config);

    ProductColor.associate = function(models){
        ProductColor.hasMany(models.Products, {
            as: "products",
            foreignKey: "color_id"
        })
    }

    return ProductColor
}