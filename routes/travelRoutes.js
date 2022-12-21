const express = require('express')
const { novaViagem, lerTodasViagens, lerUmaViagem, apagarViagem, atualizarViagem} = require('../controllers/travelcontrollers')

const router = express.Router()
router.use(express.json())

router.post('/novaViagem',novaViagem)
router.get('/',lerTodasViagens)
router.get('/:id',lerUmaViagem)
router.put('/atualizar/:id',atualizarViagem)
router.delete('/delete/:id',apagarViagem)

module.exports = router