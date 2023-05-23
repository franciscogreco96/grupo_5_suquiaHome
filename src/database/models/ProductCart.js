module.exports = (sequelize, DataTypes) => {
    let alias = "ProductsCart";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad_items: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        precio_total: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }

    let config = {
        tableName: "productcart",
        timestamps: false
    }

    const ProductCart = sequelize.define(alias, cols, config);

    ProductCart.associate = function(models){
        ProductCart.belongsTo(models.Users, {
            as: "users",
            foreignKey: "usuario_id"
        })
    }
    return ProductCart;
}