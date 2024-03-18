const mongoose = require('mongoose');

const PermissionsSchema = mongoose.Schema({
    Permission_name: {
        type: String,
        required: true
    },
    is_default: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Permissions', PermissionsSchema);
