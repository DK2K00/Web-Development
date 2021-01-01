const express = require('express');
const app = express();

const dogRoutes = require('./dogs');

app.use('/', dogRoutes);

app.listen(8080, () => {
    console.log("Listening");
})