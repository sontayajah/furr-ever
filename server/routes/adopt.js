const express = require('express')
const router = express.Router()
const Pets = require('../models/pets')

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/pets', async (req, res) => {
    try {
        const pet = await Pets.findById(req.query.id)
        if (!pet) {
            return res.status(404).send('Pet not found')
        }

        res.json(pet)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router