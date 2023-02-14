const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true, })

module.exports = Users = mongoose.model('Users', usersSchema);