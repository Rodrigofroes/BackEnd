const express = require('express');
const cadastroControllers = require('../controllers/cadastroControllers');
const AuthMiddleware = require('../middleware/authMiddleware');
const app = express.Router();

const crtl = new cadastroControllers();
const auth = new AuthMiddleware();

app.post('/register', auth.veficarUsuario,  crtl.cadastroPDS); // 
app.get('/consulta/:id', auth.veficarUsuario,  crtl.consultaId); //
app.post('/delete/:id', auth.veficarUsuario,  crtl.deletePDS); //
app.post('/alteracao/:id', auth.veficarUsuario,  crtl.alteracaoPDS); // 
app.post('/atividade', auth.veficarUsuario,  crtl.atividade); //
app.post('/movimentacao', auth.veficarUsuario,  crtl.movimentacao); //
app.get('/atividade/:id', auth.veficarUsuario,  crtl.deleteAtividade); //
app.get('/atividade/consulta/:id', auth.veficarUsuario,  crtl.consultaAtividade); //

module.exports = app;