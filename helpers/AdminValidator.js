const { check } = require('express-validator');


exports.PermissionAddValidator = [
    check('Permission_nam','Permission Name is required').not().isEmpty(), 
];