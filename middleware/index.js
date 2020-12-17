const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/siege', (req, res, next) => {
    console.log("TIS' THE WAY!!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'lordchanka') {
        next();
    }
    res.send("YOU SHALL NOT PASS!")
}


app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/siege', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('LMG MOUNTED AND LOADED!')
})

app.get('/fps', verifyPassword, (req, res) => {
    res.send('The truth is SIEGE is the best fps there is...')
})

app.use((req, res) => {
    res.status(404).send('GET REKT')
})


app.listen(8080, () => {
    console.log('Listening')
})