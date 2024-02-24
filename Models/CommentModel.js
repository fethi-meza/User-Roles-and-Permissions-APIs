
const mongoose = require('mongoose')

const CommentScheam = mongoose.Schema({
    user_id:{
        type :mongoose.Types.ObjectId ,
        required: true ,
        ref:'User'
    },
    post_id:{
        type :mongoose.Types.ObjectId ,
        required: true ,
        ref:'Post'
    },
    comment :{
        type :String ,
        required: true

        
    }
})


module.exports = mongoose.model('Comment',CommentScheam);