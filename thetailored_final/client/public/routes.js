const express = require('express');
const newProductModel = require('./addProduct');
const router = express();


router.post('/api/newProduct',(req, res) => {
    const newProduct = new newProductModel({
        brand: req.body.brand,
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
    })

    newProduct.save()
    .then(item =>{
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There is an error", err});
    })
});

router.get('/api/allproducts', async (req, res) => {
    const findProducts = await newProductModel.find();
    res.json(findProducts);
})



module.exports = router;