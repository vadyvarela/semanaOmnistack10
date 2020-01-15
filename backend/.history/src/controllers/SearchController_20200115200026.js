const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        console.log(req.query);
        return res.json({ devs: [] })
    }
}