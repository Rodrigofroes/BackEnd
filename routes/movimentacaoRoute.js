const express = require("express");
const app = express.Router();

const movimentacaoController = require('../controllers/movimentacaoController');
const authMiddleware = require('../middleware/authMiddleware');

const auth = new authMiddleware();
const ctrl = new movimentacaoController();

app.post('/cadastrar', auth.veficarUsuario, ctrl.cadastrarMovimentacao);
app.get('/deletar/:id', auth.veficarUsuario, ctrl.deletarMovimentacao);
app.post('/alterar', auth.veficarUsuario, ctrl.alterarMovimentacao);
app.get('/listar', auth.veficarUsuario, ctrl.listarMovimentacao);
app.get('/listar/:id', auth.veficarUsuario, ctrl.listarMovimentacaoPorId);

module.exports = app;
