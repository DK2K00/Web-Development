const mongoose = require('mongoose');
const Product = require('./model/product');

mongoose.connect('mongodb://localhost:27017/sportsStore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedProducts = [
    {
        name: 'Nike CR7 boots',
        price: 30.00,
        sport: 'football'
    },

    {
        name: 'Adidas M10 boots',
        price: 30.00,
        sport: 'football'
    },

    {
        name: 'Wooden Bat',
        price: 15.00,
        sport: 'cricket'
    },

    {
        name: 'Tennis ball set',
        price: 19.99,
        sport: 'tennis'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })