const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/message');

require('dotenv').config();

const app = express();

const mdb = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}.ji4jf.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`;

mongoose.connect(mdb)
    .then((result) => {
        console.log('Connected');
        app.listen(3000);
    })
    .catch((error) => console.log(error));

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/send', (req, res) => {
    const body = {
        title: req.body.title,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        read: false
    };

    const message = new Message(body);

    message.save()
        .then((result) => res.redirect('/'))
        .catch((error) => res.send(error));
});

app.get('/messages', (req, res) => {
    Message.find().sort({createdAt: -1})
        .then((messages) => res.render('messages', {messages}))
        .catch((error) => res.send(error));
});

app.get('/messages/:id', (req, res) => {
    Message.findById(req.params.id)
        .then((message) => res.render('message', {message}))
        .catch((error) => res.send(error));
});