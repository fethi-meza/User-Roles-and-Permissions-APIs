const mongoose = require('mongoose')

const postScheam = mongoose.Schema({
    title:{
        type :String ,
        required: true 
    },
    description:{
        type :String ,
        required: true 
    },
    categories:{
        type :Array ,
        required: false 
    },
})


module.exports = mongoose.model('Post',postScheam);