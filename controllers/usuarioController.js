const usuarioModel = require('../model/usuarioModel');

class usuarioController{
    async cadastro(req, res){
        const { usuario } = req.body;
        const { senha } = req.body;
        const { tipo } = req.body;

        const dados = new usuarioModel(null, usuario, senha, tipo);
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
}

module.exports = usuarioController;