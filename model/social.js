const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    name: String,
    img: String,
    link: String,
    // price: Number,
    // description: String,
    // viewer: Number,

})
const socials = mongoose.model('socials', socialSchema)
module.exports = socials