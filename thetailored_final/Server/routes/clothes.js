const express = require('express');
const ClothesSchema = require('../models/clothes');

const router = express.Router();


//Create clothing item
router.post('/api/clothes/', async(req, res) => {
    try {
        const clothes = new ClothesSchema({ ...req.body});
        await clothes.save();
        res.json(clothes);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

//Read All
router.get('/api/clothes/', async(req, res) => {
    const findClothes = await ClothesSchema.find();
    res.json(findClothes)
});

//Read specific clothing item
router.get('/api/clothes/:id', async(req, res) => {
    const findClothes = await ClothesSchema.findById(req.params.id)
    res.json(findClothes)
})



//Update clothing items
router.put('/api/upclothes/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await ClothesSchema.findByIdAndUpdate(id, req.body);
        res.json({message: 'Clothing updated successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

//Delete a clothing item
router.delete('/api/clothes/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await ClothesSchema.findByIdAndDelete(id);
        res.json({message: 'Shoe deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
//
module.exports = router;