const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    address: String,
    email: String,
    topic: String,
    description: String,
    // name: String,
    // img: [String],
    // price: Number,
    // description: String,
    // viewer: Number,

})
const contacts = mongoose.model('contacts', contactSchema)
module.exports = contacts