const Viagem = require('../models/Travel')
const dbConn = require('../db/index')
const { password } = require('../config/database')
Viagem.init(dbConn)

module.exports = {
    lerUmaViagem: async (req, res) => {
        const { password } = req.headers
        const { id } = req.params
        try {
            if (!password) {
                return res
                  .status(401)
                  .json({ Error: 'Nao Autorizado' })
              }

            const viagem = await Viagem.findByPk(id)
            if (!viagem) return res.status(400).json({ "Error": "Usuario não encontrado" })
            return res.status(200).json(viagem)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
  
    lerTodasViagens: async (req, res) => {
        
        try {
            if (!password) {
                return res
                  .status(401)
                  .json({ Error: 'Nao Autorizado' })
              }

            const viagem = await Viagem.findAll()
            return res.status(200).json(viagem)
        }
        catch (error) {
            //console.log(res.json(error))
            return res.status(500).json(error.message)
        }
    },
    novaViagem: async (req, res) => {
        const { porto_partida, porto_chegada, horario_partida, horario_chegada, qtd_carga, qtd_Passageiros, user_registo, IMO_navio } = req.body
        try {
            if (!password) {
                return res
                  .status(401)
                  .json({ Error: 'Nao Autorizado' })
              }

            const viagem = await Viagem.create({porto_partida, porto_chegada,  horario_partida, horario_chegada, qtd_carga, qtd_Passageiros, user_registo, IMO_navio });
            return res.status(201).json({ viagem })

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    atualizarViagem: async (req, res) => {
        const { id } = req.params;
        const { porto_partida, porto_chegada, horario_partida, horario_chegada, qtd_carga, qtd_Passageiros, user_registo, IMO_navio } = req.body;
        try {
            if (!password) {
                return res
                  .status(401)
                  .json({ Error: 'Nao Autorizado' })
              }

            const viagem = await Viagem.update({ porto_partida, porto_chegada, horario_partida, horario_chegada, qtd_carga, qtd_Passageiros, user_registo, IMO_navio }, { where: { id: id } })

            res.status(200).json({ viagem });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    apagarViagem: async (req, res) => {
        const { id } = req.params;
        try {
            if (!password) {
                return res
                  .status(401)
                  .json({ Error: 'Nao Autorizado' })
              }
            const viagem = await Viagem.destroy({ where: { id: id } });

            res.status(200).json({ viagem });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}