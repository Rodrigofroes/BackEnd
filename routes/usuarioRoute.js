const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const loginController = require("../controllers/loginController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
let crtl = new usuarioController();
let auth = new authMiddleware();
let crtlLogin = new loginController();

router.post("/cadastrar", auth.veficarUsuario ,crtlLogin.cadastro);
router.get("/excluir/:id", auth.veficarUsuario ,crtl.excluir);
router.get("/listar/:id", auth.veficarUsuario ,crtl.listar);
router.post("/alterar", auth.veficarUsuario ,crtl.alterar);

module.exports = router;