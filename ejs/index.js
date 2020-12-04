const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.set('partials', path.join(__dirname, '/partials'));

app.get('/', (req,res) =>{
    res.render("home");
})

app.get('/random', (req,res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num});
})

app.get('/groceries', (req,res) => {
    const list = ['apples', 'milk', 'sugar'];
    res.render('groceries', {list});
})

app.get('/page', (req,res) => {
    res.render('page');
})

app.get('/page/:newPage', (req,res) => {
    const {newPage} = req.params;
    res.render('newpage', {newPage});
})



app.get('*', (req,res) => {
    console.log('Type properly');
})

app.listen(8080, () => {
    console.log("Listening");
})