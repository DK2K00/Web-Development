const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const Restaurant = require('./models/food');

mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['nv', 'veg', 'bread'];

app.get('/foodies', async(req,res) => {
    const { category } = req.query;
    if (category) {
        const foods = await Restaurant.find({ category });
        res.render('restaurant/index', { foods, category });
    } else {
        const foods = await Restaurant.find({});
        res.render('restaurant/index', { foods, category: 'All' });
    }
})

app.get('/foodies/new', (req,res) => {
    res.render('restaurant/new', {categories});
})

app.post('/foodies', async (req, res) => {
    const newFood = new Restaurant(req.body);
    console.log(newFood);
    await newFood.save();
    res.redirect(`/foodies/${newFood._id}`)
})

app.get('/foodies/:id', async(req,res) => {
    const {id} = req.params;
    const food = await Restaurant.findById(id);
    res.render('restaurant/show', {food});
})

app.get('/foodies/:id/edit', async(req,res) => {
    const {id} = req.params;
    const food = await Restaurant.findById(id)
    res.render('restaurant/edit', {food, categories});
})

app.put('/foodies/:id', async(req,res) => {
    const {id} = req.params;
    const food = await Restaurant.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/foodies/${food._id}`);
})

app.delete('/foodies/:id', async (req, res) => {
    const { id } = req.params;
    const deletedFood = await Restaurant.findByIdAndDelete(id);
    res.redirect('/foodies');
});

app.listen(8080, () => {
    console.log("Listening");
})