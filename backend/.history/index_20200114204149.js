const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/week10?retryWrites=true&w=majority');

app.use(express.json);

app.listen(3333);