module.exports = (sequelize, DataTypes) => {
    const Bitly = sequelize.define('Bitly', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        BitlyToken: {
            type: DataTypes.STRING,
        },
        DateSystem: {
            type: DataTypes.DATE,
        },
        NameID: {
            type: DataTypes.STRING,
        },
        Active: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'BitlyToken',
        timestamps: false
    });
    return Bitly;
}