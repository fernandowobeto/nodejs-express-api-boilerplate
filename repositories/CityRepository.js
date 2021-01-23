const CityModel = require('../models/City');

class CityRepository {

    async getCities(){
        return await CityModel.findAll();
    }

}

module.exports = CityRepository;