const mongoose = require('mongoose');

const logoSchema = new mongoose.Schema({
    name: String,
    img: String,
    // price: Number,
    // description: String,
    // viewer: Number,

})
const logos = mongoose.model('logos', logoSchema)
module.exports = logos