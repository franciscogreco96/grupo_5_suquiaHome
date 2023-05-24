module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsCategory";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoria:{
            allowNull: false,
            type: dataTypes.STRING(255)
        } 
    };
    let config = {
        tableName: "productscategory",
        timestamps: false /* si mi tabla no tiene create_date ni update_date porque si no coloco esta propiedad no me va a funcionar */
    }
    const ProductCategory = sequelize.define(alias, cols, config);

    /* ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Products, {
            as: "products",
            foreignKey: "categoria_id"
        })
    } */

    return ProductCategory
}