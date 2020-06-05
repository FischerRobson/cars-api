const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    model:{
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: false
    },

    value:{
        type: Number,
        required: true
    },    
    announced:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: false,
        maxlength: 255
    }

})

mongoose.model('Car', CarSchema)