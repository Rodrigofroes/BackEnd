const express = require('express');
const app = express.Router();

const atividadeController = require('../controllers/atividadeController');
const authMiddleware = require('../middleware/authMiddleware');

const auth = new authMiddleware();
const ctrl = new atividadeController();

app.post('/cadastrar', auth.veficarUsuario, ctrl.cadastrarAtividade);
app.get('/deletar/:id', auth.veficarUsuario, ctrl.deletarAtividade);
app.post('/alterar', auth.veficarUsuario, ctrl.alterarAtividade);

module.exports = app;
