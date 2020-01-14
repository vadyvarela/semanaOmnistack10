const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async ( req, res) => {
    const { github_username } = req.body;
    const response = await axios.get(`https://api.github.com/users/${github_username}`)

    return res.json({message: response.data});
});

module.exports = routes;