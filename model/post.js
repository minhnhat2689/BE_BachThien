const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    doan1: String,
    doan2: String,
    doan3: String,
    doan4: String,
    doanket: String,
    img: [String],
    idMenu: {type: mongoose.Types.ObjectId,ref: 'menu'}   

})
const posts = mongoose.model('posts', postSchema)
module.exports = posts