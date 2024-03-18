const router  = require('express').Router()



const authController = require('../Controller/authControlle')
const {registerValidator,loginValidator}= require('../helpers/Validator')

router.post('/register',registerValidator ,authController.registerUser)
router.post('/login',loginValidator,authController.loginUser)

module.exports = router

