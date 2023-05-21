const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
    // name: String,
    // img: [String],
    // price: Number,
    // description: String,
    // viewer: Number,

})
const admins = mongoose.model('admins', adminSchema)
module.exports = admins