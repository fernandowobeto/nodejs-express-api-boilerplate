const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/sequelize');

class City extends Model{}

City.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'cities',
    timestamps: false
});

module.exports = City;