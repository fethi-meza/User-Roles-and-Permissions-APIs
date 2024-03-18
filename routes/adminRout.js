const router  = require('express').Router()



const PermissionsControler =require('../Controller/Admin/permissionController')

 
const {PermissionAddValidator}= require('../helpers/AdminValidator')

router.post('/add-permission',PermissionAddValidator,PermissionsControler.addPermission);

module.exports = router

   