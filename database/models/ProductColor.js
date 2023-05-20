module.exports = (sequelize, dataTypes) => {
    let alias = "ProductColors";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color:{
            allowNull: false,
            type: dataTypes.STRING
        } 
    };
    let config = {
        tableName: "productscolor",
        timestamps: false /* si mi tabla no tiene create_date ni update_date porque si no coloco esta propiedad no me va a funcionar */
    }
    const ProductColor = sequelize.define(alias, cols, config);

    ProductColor.associate = function(models){
        ProductColor.hasMany(models.Products, {
            as: "productos",
            foreignKey: "color_id"
        })
    }

    return ProductColor
}