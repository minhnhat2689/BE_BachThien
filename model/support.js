const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
    name: String,
    link: String,
    // name: String,
    // img: [String],
    // price: Number,
    // description: String,
    // viewer: Number,

})
const supports = mongoose.model('supports', supportSchema)
module.exports = supports