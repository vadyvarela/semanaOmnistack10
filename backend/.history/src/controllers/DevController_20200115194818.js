const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store ( req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        const dev = await Dev.findOne({ github_username });
        if(!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login , avatar_url, bio } = response.data;
            const techsArray = techs.split(',').map(tech => tech.trim());
            const location = {
                type: 'Point',
                coordinates: [latitude, longitude],
            }
        
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        
        
        return res.json(dev);
    }
}