const express = require('express')

const viagemRoutes = require('./routes/travelRoutes')
const navioRoutes = require('./routes/navRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = process.env.port || 3000

app.use('/user', userRoutes)
app.use('/navio', navioRoutes)
app.use('/viagem', viagemRoutes)

app.disable('x-power-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () =>
    console.log(`Servidor a rodar em http://localhost:${port}`))

module.exports = app