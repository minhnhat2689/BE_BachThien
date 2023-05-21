const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: String,
    link: String, 

    // name: String,
    // img: [String],
    // price: Number,
    // description: String,
    // viewer: Number,

})
const menu = mongoose.model('menu', menuSchema)
module.exports = menu