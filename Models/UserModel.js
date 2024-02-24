const mongoose = require('mongoose')

const userScheam = mongoose.Schema({
    name:{
        type :String ,
        required: true 
    },
    email:{
        type :String ,
        required: true 
    },
    password:{
        type :String ,
        required: true 
    },
    rol:{
        type : Number ,
        default : 0 // Normale User , 1=Admin  , 2=sub Admin ,3= editor 
         
    },
})


module.exports = mongoose.model('User',userScheam);