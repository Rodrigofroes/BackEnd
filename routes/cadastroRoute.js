const express = require('express');
const cadastroControllers = require('../controllers/cadastroControllers');
const app = express.Router();

const crtl = new cadastroControllers;

app.post('/register', crtl.cadastroPDS);
app.get('/consulta', crtl.consultaPDS);
app.get('/consulta/:id', crtl.consultaId);
app.post('/delete/:id', crtl.deletePDS);
app.post('/alteracao/:id', crtl.alteracaoPDS);

module.exports = app;