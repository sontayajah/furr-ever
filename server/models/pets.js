const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    image: {
        type: String
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    breed: {
        type: String
    },
    status: {
        type: String,
        default: "Available"
    }
}, { timestamps: true})

module.exports = Pets = mongoose.model('Pets', petsSchema)