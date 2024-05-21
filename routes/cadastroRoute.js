const express = require('express');
const cadastroControllers = require('../controllers/cadastroControllers');
const AuthMiddleware = require('../middleware/authMiddleware');
const app = express.Router();

const crtl = new cadastroControllers();
const auth = new AuthMiddleware();

app.post('/register', auth.veficarUsuario,  crtl.cadastroPDS);
app.post('/user', auth.veficarUsuario,  crtl.cadastroUser);
app.get('/consulta',  auth.veficarUsuario, crtl.consultaPDS);
app.get('/consulta/:id', auth.veficarUsuario,  crtl.consultaId);
app.post('/delete/:id', auth.veficarUsuario,  crtl.deletePDS);
app.post('/alteracao/:id', auth.veficarUsuario,  crtl.alteracaoPDS);
app.get('/options', auth.veficarUsuario,  crtl.optionsPDS);

module.exports = app;