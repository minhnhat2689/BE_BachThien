const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: String,
    // price: Number,
    // description: String,
    // viewer: Number,

})
const languages = mongoose.model('languages', languageSchema)
module.exports = languages