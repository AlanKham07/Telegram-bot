const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'TelegramDB',
    'root',
    '007788252610',
    {
        host: '77.223.107.130',
        port: '6432',
        dialect: 'postgres',
    }
)