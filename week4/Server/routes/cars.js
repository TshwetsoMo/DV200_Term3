const express = require('express')

const CarSchema = require('../models/cars')

const router = express();

//Read all
router.get('/api/cars', async(req, res) =>{
    const findCar = await CarSchema.find()
    res.json(findCar)
})

//Read Single
router.get('/api/car/:id', async (req, res) => {
    const findCar = await CarSchema.findById(req.params.id)
    res.json(findCar)
})

//Create
router.post('/api/car', async (req, res) =>{
    const car = new CarSchema({ ...req.body })
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Update
router.put('/api/car/:id', async (req, res) =>{
    const {id} = req.params.id;
    await CarSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/car/:id', async (req, res) =>{
    await CarSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})
module.exports = router;