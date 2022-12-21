const { Model, DataTypes } = require('sequelize')

class travel extends Model {
    static init(connection) {
        super.init({
            partida: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 50) throw new Error("Ponto de partida nomáximo 50 caractéres")      //           
                    },
                }
            },
            chegada: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 50) throw new Error("Ponto de chegada nomáximo 50 caractéres")              //   
                    },
                }
            },
            horario_part: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            horario_chegada: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            qtd_passageiros: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            qtd_carga: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            
        }, {
            sequelize: connection,
            tableName: 'viagem',//
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }) 
        this.belongsTo(models.Navio, { foreignKey: 'IMO', as: 'navio' })       
    }
}

module.exports = travel