const express = require('express');
const loginController = require('../controllers/loginController');
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');

const app = express.Router();
const ctrl = new loginController();
const auth = new authMiddleware();

app.post('/login', ctrl.login); //
app.post('/cadastro', auth.veficarUsuario ,ctrl.cadastro); //
app.get('/listar', auth.veficarUsuario, ctrl.listar); //

module.exports = app;
