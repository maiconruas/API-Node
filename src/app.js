const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('Connect String');

// Carregar Models
const Product = require('./models/product');

//Carregar as rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', index);
app.use('/products', product);

module.exports = app;