const User = require("./User");

module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        tipo_categoria:{
            type: dataTypes.varchar(255),
            allowNull: false
        }
        
    };
    let config = {
        tableName: "usercategory",
        timestamps: false 
    }
    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate=function(models){
        UserCategory.hasMany(models.Users, {
            as: "user",
            foreignKey: " categoria_id"
        })
    }

    return UserCategory

}