const { Model, DataTypes } = require('sequelize')

class Navio extends Model {
    static init(connection) {
        super.init({
            imo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey:true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 50) throw new Error("50 máximo caractéres")         //        
                    },
                }
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 30) throw new Error("30 máximo  caractéres")                 
                    },
                }
            },
            maxcargas: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            maxpassageiros: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            prop: {//proprietario
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 50) throw new Error("50 máximo  caractéres")              //   
                    },
                }
            }
        }, {
            sequelize: connection,
            tableName: 'navio',
        })
    }
}

module.exports = Navio