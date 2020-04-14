const express = require('express');
const hbs = require('hbs');
const path = require('path');

const server = express();

server.set('view engine', 'hbs');

server.use(express.static(__dirname + "/public"));

server.get('/', (req, res) => {
    res.render('index');
});

server.get('/about', (req, res) => {
    res.render('about');
});

server.get('/contact', (req, res) => {
    res.render('contact', {
        layout: false,
    })
});

server.listen(3001, () => {
    console.log('Server running');
});