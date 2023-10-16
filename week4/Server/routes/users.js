const express = require('express')
const UserSchema = require('../models/users')
const router = express()

//Add a User
router.post('/api/addUser/', async (req, res) =>{
    const user = new UserSchema({ ...req.body })
    await user.save()
        .then(response => res.json(response) )
        .catch(error => res.status(500).json(error))
})

//Get all
router.get('/api/getUsers/', async (req, res) =>{
    const findUser = await UserSchema.find()
    res.json(findUser)
})

module.exports = router;
