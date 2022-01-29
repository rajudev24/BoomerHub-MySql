
module.exports = (sequelize, DataTypes) => {

    const Property = sequelize.define("property", {
        name: {
            type: DataTypes.STRING,
            nullAllow: false
        },
        address: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state:{
            type: DataTypes.STRING,
        },
        zip_Code: {
            type: DataTypes.INTEGER,
        },
        county: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        long: {
            type: DataTypes.FLOAT,
        },
        lat: {
            type: DataTypes.FLOAT,
        },
        images: {
            type: DataTypes.STRING,
        }
        

    });


    return Property
}