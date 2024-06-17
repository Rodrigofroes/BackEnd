const express = require('express');
const router = express.Router();

const depositoController = require('../controllers/depositoController');
const middleware = require('../middleware/authMiddleware');

const auth = new middleware();
const crtl = new depositoController();

router.get('/listar', auth.veficarUsuario,crtl.listarDeposito);
router.post('/inserir', auth.veficarUsuario,crtl.inserirDeposito);
router.post('/alterar', auth.veficarUsuario,crtl.alterarDeposito);
router.post('/excluir', auth.veficarUsuario,crtl.excluirDeposito);
router.get('/consultar/:id', auth.veficarUsuario,crtl.consultarDeposito);
router.get('/consultarAno/:ano', auth.veficarUsuario,crtl.consultarDepositoPorAno);

module.exports = router;
