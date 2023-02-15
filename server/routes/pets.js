const express = require('express')
const Pets = require('../models/pets')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const pet = await Pets.find()
        res.json(pet)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

router.post('/', async (req, res) => {
    try {
        const { image, type, name, age, gender, breed, description, status } = req.body;

        const pet = new Pets({
            image,
            type,
            name,
            age,
            gender,
            breed,
            description,
            status
        })

        await pet.save()
        res.send('Add a Pet is Success!')
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router