const mongoose = require('mongoose');
const PontSchema = require('../utils/PointSchema');

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PontSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);