const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }));


//Default case for pages not routed
app.get('*', (req,res) => {res.status(404).send({
    message: '404 Page Not found'
})});

module.exports = app;