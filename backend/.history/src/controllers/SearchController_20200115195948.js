const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        console.log(request.query)
        return res.json({ devs: [] })
    }
}