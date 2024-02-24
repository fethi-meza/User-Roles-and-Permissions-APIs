const mongoose = require('mongoose')

const categoryScheam = mongoose.Schema({
    title:{
        type :String ,
        required: true 
    }
})


module.exports = mongoose.model('Category',categoryScheam);