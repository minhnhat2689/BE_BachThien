const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const app  = express();
const productRouter = require('./router/productRouter')
const dotenv = require('dotenv')
app.use(bodyParser.urlencoded({ extended: false }))


dotenv.config()
// Sử dụng middleware CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json())
mongoose.connect(process.env.DATABASE)
    .then(function(){
        console.log('ket noi thanh cong')
    })
    .catch(function(err){
        console.log('that bai')
    })
    app.use('/', productRouter);



app.listen (process.env.PORT, function () {
    console.log('server listening on port 3000')
})

