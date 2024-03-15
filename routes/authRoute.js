const router  = require('express').Router()



const authController = require('../Controller/authControlle')
const {registerValidator}= require('../helpers/Validator')

router.post('/register',registerValidator ,authController.registerUser)

module.exports = router

