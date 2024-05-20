const usuarioModel = require("../model/usuarioModel");

class authMiddleware{
    async veficarUsuario(req, res, next){
        if(req.cookies != undefined && req.cookies.usuarioLogado != null){
            let usuarioId = req.cookies.usuarioLogado;
            let usuario = new usuarioModel();
            let result = await usuario.obter(usuarioId);
            if(result != null && result.tipo == 1){
                next();
            } else {
                res.send({
                    ok: false,
                    msg: "Usuario não autorizado"
                })
            }
        } else {
            res.send({
                ok: false,
                msg: "Usuario não autorizado"
            })
        }
    }
}

module.exports = authMiddleware;