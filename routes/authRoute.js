const express = require('express')

const route = express.Router()


const AuthController =  requirr('../Controller/authControlle.js')
const {ValidatorRegister}  = require('../helpers/Validator')


route.post('/register',ValidatorRegister , AuthController.registerUser )


module.exports = route