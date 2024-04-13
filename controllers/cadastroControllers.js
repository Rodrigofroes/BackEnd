const cadastroModel = require('../model/cadastroModel');

class cadastroControllers{

    async cadastroPDS(req, res){
        const { data } = req.body;
        const { nome } = req.body;
        const { atividade } = req.body;
        const { movimentacao } = req.body;
        const { quantidade } = req.body;

        const dados = new cadastroModel(data,nome, atividade, movimentacao, quantidade);
        const result = await dados.cadastro();

        if(result){
            res.send({
                ok: true,
                msg: "cadastrado com sucesso"
            })
        } else {
            res.send({
                ok: false,
                msg: "cadastro mal sucedido"
            })
        }
    }

    async consultaPDS(req, res){
        const dados = new cadastroModel();
        const result = await dados.consultaPDS();
        
        res.send(result);
    }
    

}

module.exports = cadastroControllers;