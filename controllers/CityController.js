const CityModel = require('../models/City');

class CityController {

    async city(request, response){
        const city = await CityModel.findByPk(request.params.id);

        response.json(city);
    }

    async cities(request, response){
        const cities = await CityModel.findAll();

        response.json(cities);
    }

    async create(request, response){
        const city = await CityModel.create({
            name: request.body.name
        });

        response.json(city);
    }

}

module.exports = new CityController();