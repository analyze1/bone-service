module.exports = (sequelize, DataTypes) => {
    const SubBrand = sequelize.define('SubBrand', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        br_id: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        mo_used: {
            type: DataTypes.STRING,
        },
        mocar_price: {
            type: DataTypes.STRING,
        },
        YearCar: {
            type: DataTypes.STRING,
        },
        EndYearCar: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'tb_mo_car',
        timestamps: false      // Adjust according to your table schema
    });
    return SubBrand;
}