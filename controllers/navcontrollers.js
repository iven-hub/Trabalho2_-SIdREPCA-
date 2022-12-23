const Navio = require('../models/Nav')
const dbConn = require('../db/index')
Navio.init(dbConn)
module.exports = {
    lerUmNavio: async (req, res) => {
        const { imo } = req.params
        try {
            const navio = await Navio.findByPk(imo)
            if (!navio) return res.status(400).json({ "Error": "Navio não encontrado" })
            return res.status(200).json(navio)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    lerTodosNavio: async (req, res) => {
        try {
            const navio = await Navio.findAll()
            return res.status(200).json(navio)
        }
        catch (error) {
            //console.log(res.json(error))
            return res.status(500).json(error.message)
        }
    },
    novoNavio: async (req, res) => {
        
        const { imo, nome, tipo, maxCargas, maxPassageiros, proprietario } = req.body
        try {
            const navio = await Navio.create({imo,nome,tipo,maxCargas,maxPassageiros,proprietario});
            return res.status(201).json({ navio })

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    atualizarNavio: async (req, res) => {
        const { imo_navio } = req.params;
        const { imo, nome, tipo, maxCargas, maxPassageiros, proprietario } = req.body;
        try {
            const navio = await Navio.update({ imo, nome, tipo, maxCargas, maxPassageiros, proprietario }, { where: { imo: imo_navio } })

            res.status(200).json({ navio });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    apagarNavio: async (req, res) => {
        const { imo } = req.params;
        try {
            const navio = await Navio.destroy({ where: { imo: imo } });

            res.status(200).json({ navio });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}