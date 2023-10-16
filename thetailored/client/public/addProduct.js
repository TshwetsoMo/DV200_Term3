const mongoose = require('mongoose');

const addProduct = mongoose.Schema({
    brand: {type: String, required: true},
    name: {type: String, required: true},
    size: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('products', addProduct);