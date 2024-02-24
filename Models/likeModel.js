
const mongoose = require('mongoose')

const likeScheam = mongoose.Schema({
    user_id:{
        type :mongoose.Types.ObjectId ,
        required: true ,
        ref:'User'
    },
    post_id:{
        type :mongoose.Types.ObjectId ,
        required: true ,
        ref:'Post'
    }
    
})


module.exports = mongoose.model('Like',likeScheam);