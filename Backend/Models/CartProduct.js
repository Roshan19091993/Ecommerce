// models/AddToCart.js
const mongoose = require('mongoose');

const addToCartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',  // Ensure this references 'Product'
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const AddToCart = mongoose.model('AddToCart', addToCartSchema);

module.exports = AddToCart;
