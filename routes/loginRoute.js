const express = require('express');
const loginController = require('../controllers/loginController');
const usuarioController = require('../controllers/usuarioController');

const app = express.Router();
const auth = new loginController();
const ctrl = new usuarioController();

app.post('/login', auth.login);
app.post('/cadastro', ctrl.cadastro);
// app.get('/validar', auth.validar);

module.exports = app;
