const express = require('express');
const CityController = require('./controllers/CityController');

const routes = express.Router();

routes.get('/', function (req, res) {
    res.send('API Home')
});

routes.get('/city/:id', CityController.city);
routes.post('/city', CityController.create);
routes.get('/city', CityController.cities);

module.exports = routes;