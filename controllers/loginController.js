const Token = require('../utils/Token');
const usarioModel = require('../model/usuarioModel');

class loginController{
    async login(req, res){
        if(req.body.usuario != "" && req.body.senha != "") {
            let usuario = new usarioModel();
            usuario = await usuario.obterPorUsuarioSenha(req.body.usuario, req.body.senha);
            if(usuario != null) {
                // res.cookie("usuarioLogado", usuario.id);
                res.cookie("token", new Token().encodeToken(usuario.id));
                res.status(201).send({
                    msg: "Usuário logado com sucesso!"
                })
            }   
            else {
                res.send({
                    msg: "Usuário/Senha incorretos!"
                })
            }
        }
        else {
            res.send({
                msg: "Usuário/Senha incorretos!"
            })
        }
    }

}

module.exports = loginController;