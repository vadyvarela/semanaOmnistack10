const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('../src/routes');

const app = express();

// mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/week10?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

mongoose.connect('mongodb://localhost/semana10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Erro ao conectar! " + err);
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);