const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('Connect String');

// Carregar Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carregar as rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');
const customer = require('./routes/customer-route');
const order = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;