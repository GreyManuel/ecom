const express = require('express');
const mongoose = require('mongoose');


//Create a DB Connection


mongoose.connect('mongodb+srv://admin2:admin2@cluster0.n6bff.mongodb.net/')
.then(()=>console.log('MongoDB Connected'));

const app = express();
const PORT = process.env.PORT || 5000;