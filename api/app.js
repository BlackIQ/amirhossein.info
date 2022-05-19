const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/message');

require('dotenv').config();

const app = express();

const mdb = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASE}.ji4jf.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(mdb)
    .then((connection) => console.log('Connected'))
    .catch((error) => console.log(error));

app.use(express.urlencoded({extended: true}));
app.set('json spaces', 2);

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const pkgs = require('./package.json');

    res.send(pkgs);
});

app.post('/send', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const message = new Message(req.body);

    message.save()
        .then((result) => res.redirect(process.env.REACT_APP))
        .catch((error) => res.send(error));
});

app.get('/messages', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Message.find().sort({createdAt: -1})
        .then((messages) => res.send(messages))
        .catch((error) => res.send(error));
});

app.get('/messages/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Message.findById(req.params.id)
        .then((message) => {
            if (message == null) res.send({});
            else res.send(message);
        })
        .catch((error) => res.send(error));
});

app.listen(process.env.PORT);