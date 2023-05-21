const mongoose = require('mongoose');

const danhmucSchema = new mongoose.Schema({
    name: String,
    link: String,
    idMenu: {type: mongoose.Types.ObjectId,ref: 'menu'}   
    // name: String,
    // img: [String],
    // price: Number,
    // description: String,
    // viewer: Number,

})
const danhmucs = mongoose.model('danhmucs', danhmucSchema)
module.exports = danhmucs