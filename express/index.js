const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Main Page");
})

app.get('/dogs', (req,res) => {
    res.send("This is the dog page.");
})

app.post('/dogs', (req,res) => {
    res.send("Post Request!");
})

app.get('/dogs/:breeds', (req,res) => {
    const {breeds} = req.params;
    res.send(`<h1>This is a page for the ${breeds} breed</h1>`);
})

app.get('/search', (req,res) => {
    const {q} = req.query;
    if(!q)
        res.send("No params");
    else
        res.send(`The params are ${q} and ${others}`);
})


app.get('*', (req,res) => {
    res.send("The rest");
})

app.listen(8080, () => {
    console.log("Listening");
})