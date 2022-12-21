const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
           
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 60) throw new Error("Nome no máximo 60 caractéres")       //          
                    }
                }
            }, 
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 80) throw new Error("Password no máximo 80 caractéres")    //             
                    }
                }
            },
            
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize: connection,
            tableName: 'user',
        })
    }
}

module.exports = User