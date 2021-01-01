const express = require('express');
const router = express.Router();

router.get('/', (reqq,res) => {
    res.send("Home page");
})

router.get('/breed', (req,res) => {
    res.send("There are different breeds available");
})


router.post('/breed', (req,res) => {
    res.send("POST route");
})

router.get('/breed/:id', (req,res) => {
    const {id} = req.params;
    res.send(`This is the ${id} page`);
})

module.exports = router;