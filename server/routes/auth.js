const express = require('express')
const Users = require('../models/users')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        var user = await Users.findOne({ username })
        if (user) {
            return res.status(400).send('User already exists')
        }

        const salt = await bcrypt.genSalt(10)
        user = new Users({
            username,
            password
        })

        user.password = await bcrypt.hash(password, salt)
        await user.save()

        res.send('Register is Success! ' + username + " " + password)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        var user = await Users.findOneAndUpdate({ username }, { new: true })
        if (!user) {
            return res.status(400).send('Invalid username or password')
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send('Invalid username or password')
        }

        // const payload = {
        //     user: {
        //         username: user.username
        //     }
        // }

        // jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        //     if (err) throw err
        //     res.json({ token, payload })
        // })

        res.send('Login is Success! ' + username + " " + password)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
})

module.exports = router