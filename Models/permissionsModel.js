
const mongoose = require('mongoose')

const permissionsScheam = mongoose.Schema({
    user_id:{
        type :mongoose.Types.ObjectId ,
        required: true ,
        ref:'User'
    },
    permissions:{
        permissions_name :String ,
        permissionso_Value:[Number] // 0-> create , 1->read   , 2->edit  ,3->edelet
         ,

    }
})


module.exports = mongoose.model('Permissions',permissionsScheam);