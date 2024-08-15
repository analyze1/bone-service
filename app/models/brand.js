module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        code_br_car: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'tb_br_car',  // Specify the actual table name
        timestamps: false      // Adjust according to your table schema
    });

    return Brand;
};