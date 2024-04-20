const express = require('express');
const homeControllers = require('../controllers/homeControllers');
const app = express.Router();

const crtl = new homeControllers();

app.get('/listagem', crtl.listagem);
app.get('/grafico', crtl.grafico);
app.get('/movimentacao', crtl.movimentacao);
app.get('/atividade', crtl.atividade);
app.get('/filtro', crtl.filtro);

module.exports = app;