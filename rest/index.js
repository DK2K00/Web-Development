const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); 
const express = require('express');
const app = express();



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let tweets = [
    {
        id: uuid(),
        username: 'dk2k00',
        tweet: 'I am a GOD!'
    },
    {
        id: uuid(),
        username: 'de_king_27',
        tweet: 'Wassup!'
    },
    {
        id: uuid(),
        username: 'icode',
        tweet: 'I can code'
    }
]



app.get('/tweets', (req,res) => {
    res.render('tweets/home', {tweets});
})

app.get('/tweets/new', (req,res) => {
    res.render('tweets/new');
})

app.post('/tweets', (req,res) => {
    const { username, tweet } = req.body;
    tweets.push({username, tweet, id: uuid()})
    res.redirect('/tweets');
})

app.get('/tweets/:id', (req,res) => {
    const {id} = req.params;
    const tweet = tweets.find(t => t.id === id);
    res.render('tweets/show', {tweet})
})

app.get('/tweets/:id/edit', (req,res) => {
    const {id} = req.params;
    const tweet = tweets.find(t => t.id === id);
    res.render('tweets/edit', {tweet})
})

app.patch('/tweets/:id', (req,res) => {
    const {id} = req.params;
    const foundTweet = tweets.find(t => t.id === id);

    const newTweetText = req.body.tweet;
    foundTweet.tweet = newTweetText;

    res.redirect('/tweets');
})

app.delete('/tweets/:id', (req,res) => {
    const {id} = req.params;
    tweets = tweets.filter(t => t.id !== id);
    res.redirect('/tweets');
})


app.listen(8080, () => {
    console.log("Listening");
})
