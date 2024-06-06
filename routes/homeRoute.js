const express = require('express');
const homeControllers = require('../controllers/homeControllers');
const authMiddleware = require('../middleware/authMiddleware');
const app = express.Router();

const crtl = new homeControllers();
const auth = new authMiddleware();

app.get('/listagem', auth.veficarUsuario, crtl.listagem); //
app.get('/grafico', auth.veficarUsuario, crtl.grafico); // 
app.get('/grafico/:value', auth.veficarUsuario, crtl.graficoAno); // 
app.get('/grafico/mes/:value', auth.veficarUsuario, crtl.graficoMes); //
app.get('/movimentacao', auth.veficarUsuario, crtl.movimentacao); //
app.get('/atividade', auth.veficarUsuario, crtl.atividade); //
app.get('/options', auth.veficarUsuario,  crtl.options);

module.exports = app;