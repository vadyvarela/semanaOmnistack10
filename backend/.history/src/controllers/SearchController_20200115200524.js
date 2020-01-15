const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = request.query;
        const techArray = parseStringAsArray(techs);

        console.log(techArray);

        return res.json({ devs: [] })
    }
}