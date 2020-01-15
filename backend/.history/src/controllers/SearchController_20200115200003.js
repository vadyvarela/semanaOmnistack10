const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        console.log(res.query);
        return res.json({ devs: [] })
    }
}