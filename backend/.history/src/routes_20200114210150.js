const { Router } = require('express');

const routes = Router();

routes.get('/users', req, res) {
    return res.json(message: 'VAdy Varela')
}

module.exports = routes;