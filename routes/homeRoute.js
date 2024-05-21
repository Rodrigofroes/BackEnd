const express = require('express');
const homeControllers = require('../controllers/homeControllers');
const authMiddleware = require('../middleware/authMiddleware');
const app = express.Router();

const crtl = new homeControllers();
const auth = new authMiddleware();

app.get('/listagem', auth.veficarUsuario, crtl.listagem);
app.get('/grafico', auth.veficarUsuario, crtl.grafico);
app.get('/movimentacao', auth.veficarUsuario, crtl.movimentacao);
app.get('/atividade', auth.veficarUsuario, crtl.atividade);
app.get('/filtro', auth.veficarUsuario, crtl.filtro);
app.get('/download', auth.veficarUsuario, crtl.download);

module.exports = app;