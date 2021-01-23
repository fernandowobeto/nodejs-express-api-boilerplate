const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, function(){
    console.log('Express listen on port 3000');
});