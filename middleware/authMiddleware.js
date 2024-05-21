const usuarioModel = require("../model/usuarioModel");
const Token = require("../utils/Token");

class authMiddleware {
  async veficarUsuario(req, res, next) {
    if (req.cookies != undefined && req.cookies.token != undefined) {
      let usuarioId = new Token().decodeToken(req.cookies.token);
      let usuario = new usuarioModel();
      let result = await usuario.obter(usuarioId);
      if (result != null && result.tipo == 1) {
        next();
      } else if(result != null && result.tipo == 2) {
        next();
      }
    } else {
      res.status(401).send({
        ok: false,
        msg: "Usuario não autorizado",
      });
    }
  }
}

module.exports = authMiddleware;
