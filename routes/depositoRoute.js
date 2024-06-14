const express = require('express');
const router = express.Router();

const depositoController = require('../controllers/depositoController');
const middleware = require('../middleware/authMiddleware');

const auth = new middleware();
const crtl = new depositoController();

router.get('/listar', auth.veficarUsuario,crtl.listarDeposito);

module.exports = router;
