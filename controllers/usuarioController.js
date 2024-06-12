const usuarioModel = require("../model/usuarioModel");
class usuarioController{

    cadastrar(req, res){
        let {usuario, senha, cargo} = req.body;
        let user = new usuarioModel(null, usuario, senha, cargo);
        const result = user.cadastro();
        if(result){
            res.send({
                ok: true,
                message: "Usuário cadastrado com sucesso!"
            });
        } else {
            res.send({
                ok: false,
                message: "Erro ao cadastrar usuário!"
            });
        }
    }

    excluir(req, res){
        let id = req.params.id;
        let user = new usuarioModel(id);
        const result = user.excluir();
        if(result){
            res.send({
                ok: true,
                message: "Usuário excluído com sucesso!"
            });
        } else {
            res.send({
                ok: false,
                message: "Erro ao excluir usuário!"
            });
        }
    }

    async listar(req, res){
        let id = req.params.id;
        let user = new usuarioModel(id);
        const result = await user.listar();
        if(result){
            res.send(result);
        } else {
            res.send({
                ok: false,
                message: "Erro ao listar usuário!"
            });
        }
    }

    async alterar(req, res){
        let {usuario, senha, cargo, id} = req.body;
        let user = new usuarioModel(id, usuario, senha, cargo);
        const result = await user.alterar();
        if(result){
            res.send({
                ok: true,
                message: "Usuário alterado com sucesso!"
            });
        } else {
            res.send({
                ok: false,
                message: "Erro ao alterar usuário!"
            });
        }
    }


}
module.exports = usuarioController;	