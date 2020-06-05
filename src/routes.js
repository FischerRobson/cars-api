const express = require('express')
const routes = express.Router()
const CarController = require('./models/controllers/CarController')


/*ROTAS*/ 
/*routes.get('/', (req, res) => {
    res.send('tela inicial')
})*/

routes.post('/car', CarController.create)
routes.get('/car', CarController.list)
routes.delete('/car/:id', CarController.delete)


module.exports = routes