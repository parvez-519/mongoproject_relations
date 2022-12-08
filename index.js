const express=require('express')
const app=express();
const bodyparser=require('body-parser')
require('dotenv').config();
const router = require('./api/router');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/ecom'
mongoose.connect(url);
app.use('/',router)

async function run() {
    app.listen(process.env.PORT, () => {            
        console.log(`Now listening on port ${process.env.PORT}`); 
    });
}

run();

