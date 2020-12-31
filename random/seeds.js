const mongoose = require('mongoose');
const Food = require('./models/food');

mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const seedFood = [
    {name: 'Chicken', price: 5, quantity: 1, category: 'nv'},
    {name: 'Paneer', price: 4, quantity: 4, category: 'veg'},
    {name: 'Roti', price: 2, quantity: 2, category: 'bread'},
    {name: 'Naan', price: 2, quantity: 2, category: 'bread'}
];

Food.insertMany(seedFood)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
