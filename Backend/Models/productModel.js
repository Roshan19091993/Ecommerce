
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [String],  // Specify array of strings for images
    description: String,
    price: Number,
    sellingPrice: Number,
    quantity: Number,
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
