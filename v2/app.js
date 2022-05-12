const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/message');

const app = express();

const mdb = "mongodb+srv://ninja:test1234@menblogs.ji4jf.mongodb.net/menblogs?retryWrites=true&w=majority";
mongoose.connect(mdb)
    .then((result) => {
        console.log('Connected');
        app.listen(3000, 'localhost');
    })
    .catch((error) => console.log(error))

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/send', (req, res) => {
    const message = new Message(req.body);

    message.save()
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
});

app.get('/messages', (req, res) => {
    Message.find().sort({createdAt: -1})
        .then((messages) => {
            res.render('messages', {messages})
        })
        .catch((error) => res.send(error));
});