const mongoose = require('mongoose')

const Car =  mongoose.model('Car')

module.exports = {

    async create(req, res){
        const car = await Car.create(req.body)

        return res.json(car)
    },

    async list(req, res){
        const car = await Car.find()

        return res.json(car)
    },

    async delete(req, res){
        await Car.findByIdAndRemove(req.params.id)

        return res.send()
    } 

}