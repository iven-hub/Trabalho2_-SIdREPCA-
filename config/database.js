require('dotenv').config()

module.exports = {
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'Sidrepca',
    dialect: 'postgres',
    port: 5433,
    dialectOptions:{

    },
    define:{
        timestamps:false,
        underscored: true,
    }
}