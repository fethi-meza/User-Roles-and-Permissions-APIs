
const User = require('../Models/UserModel');
const {validationResult} = require('express-validator')

const  registerUser =async (req ,res)=>{

    try {

        const errors = validationResult(req)
        if(!errors.isEmpty){
            return res.status(200).json({
                success: true,
                msg :"Errors",
                errors : errors.array()
              
                })
        }
        
    } catch (error) {
        return res.status(400).json({
        success: false,
        msg : error.message
        })
    }
}

module.exports = {registerUser }