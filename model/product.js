const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    name: String,
    img: [String],
    price: Number,
    description: String,
    viewer: Number,
    idDanhmuc: {type: mongoose.Types.ObjectId,ref: 'danhmucs'}    

})
const products = mongoose.model('products', productSchema)
module.exports = products
