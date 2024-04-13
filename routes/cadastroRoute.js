const express = require('express');
const cadastroControllers = require('../controllers/cadastroControllers');
const app = express.Router();

const crtl = new cadastroControllers;

app.post('/', crtl.cadastroPDS);
app.get('/', crtl.consultaPDS);
app.post('/delete/:id', crtl.deletePDS)

module.exports = app;