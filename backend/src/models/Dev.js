import mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);