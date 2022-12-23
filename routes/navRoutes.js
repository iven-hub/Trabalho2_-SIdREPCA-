const express = require('express')
const { novoNavio, lerTodosNavio, lerUmNavio, apagarNavio, atualizarNavio} = require('../controllers/navcontrollers')

const router = express.Router()
router.use(express.json())

router.post('/novoNavio',novoNavio)
router.get('/',lerTodosNavio)
router.get('/:imo',lerUmNavio)
router.put('/atualizar/:imo_navio',atualizarNavio)
router.delete('/delete/:imo',apagarNavio)

module.exports = router