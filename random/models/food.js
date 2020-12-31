const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['nv', 'veg', 'bread']
    }
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;