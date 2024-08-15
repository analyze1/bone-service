module.exports = (sequelize, DataTypes) => {
    const Cost = sequelize.define('Cost',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            car_id: {
                type: DataTypes.INTEGER,
            },
            mo: {
                type: DataTypes.STRING,
            },
            cost: {
                type: DataTypes.DECIMAL,
            },
            cost_end: {
                type: DataTypes.DATE,
            },
            cost_range: {
                type: DataTypes.INTEGER,
            },
            pre: {
                type: DataTypes.INTEGER,
            },
            stamp: {
                type: DataTypes.STRING,
            },
            tax: {
                type: DataTypes.INTEGER,
            },
            net: {
                type: DataTypes.INTEGER,
            },
            prb: {
                type: DataTypes.STRING,
            },
            total: {
                type: DataTypes.INTEGER,
            },
            cc: {
                type: DataTypes.INTEGER,
            },
            repair: {
                type: DataTypes.STRING,
            },
            comp: {
                type: DataTypes.STRING,
            },
            create_date: {
                type: DataTypes.DATE,
            },
            status_cost: {
                type: DataTypes.STRING,
            },
            insured_type: {
                type: DataTypes.STRING,
            },
            mocargroup: {
                type: DataTypes.STRING,
            },
            protect_type: {
                type: DataTypes.STRING,
            },
            date_expired: {
                type: DataTypes.DATE,
            },
            prod_name: {
                type: DataTypes.STRING,
            },
            prod_remark: {
                type: DataTypes.STRING,
            },
            prod_condition: {
                type: DataTypes.STRING,
            },
            emppost: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: 'tb_cost',
            timestamps: false
        });

    return Cost;
}