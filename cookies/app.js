const express = require('express');
const app = express()

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/intro', (req,res) => {
    res.cookie('name', 'Danush');
    res.cookie('greet', 'Hello');
    res.send("Enjoy your cookie");
})

app.get('/hello', (req,res) => {
    const{name='User'} = req.cookies;
    res.send(`Hello ${name}`);
})

app.get('/getsignedcookie', (req,res) => {
    res.cookie('dog', 'lab', {signed: true});
    res.send("Shush. The dog is asleep. That's why this is signed");
})

app.listen(8080, () => {
    console.log("Listening");
})