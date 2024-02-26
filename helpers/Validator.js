const {check}= require('express-validator')

exports.registerValidator  =[

    check('name' , 'Name is required ').not().isEmpty(),
    check('email' , 'Please includea valid eamil ').not().isEmail().normalizeEmail({
gmail_remove_dots :true
    }),
    check('name' , 'Name is required ').not().isEmpty(),
] ;