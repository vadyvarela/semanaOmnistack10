const { Router } = require('express');

const routes = Router();

routes.post('/devs',( req, res) => {
    const { github_username } = req.body;

    return res.json({message: 'VAdy Varela'});
});

module.exports = routes;