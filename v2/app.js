const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/send', (req, res) => {
    res.send(req.body);
})

app.listen(3000, 'localhost');