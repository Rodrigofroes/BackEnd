const Token = require('../utils/Token');
const usuarioModel = require('../model/usuarioModel');

class loginController{
    async login(req, res){
        if(req.body.usuario != "" && req.body.senha != "") {
            let usuario = new usuarioModel();
            usuario = await usuario.obterPorUsuarioSenha(req.body.usuario, req.body.senha);
            if(usuario != null) {
                // res.cookie("usuarioLogado", usuario.id);
                res.cookie("token", new Token().encodeToken(usuario.id, usuario.tipo));
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

    async cadastro(req, res){
        const { usuario } = req.body;
        const { senha } = req.body;
        const { cargo } = req.body;

        const dados = new usuarioModel(null, usuario, senha, cargo);
        const result = await dados.verificar();
        if(result.length > 0){
            res.send({
                ok: false,
                msg: "Usuario já cadastrado"
            })
        } else {
            await dados.cadastro();
            res.send({
                ok: true,
                msg: "cadastrado com sucesso"
            })
        }
    }

    async listar(req, res){
        const dados = new usuarioModel();
        const result = await dados.consulta();
        res.send(result);
    }
}

module.exports = loginController;