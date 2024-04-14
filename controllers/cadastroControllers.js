const cadastroModel = require('../model/cadastroModel');

class cadastroControllers{

    async cadastroPDS(req, res){
        const { data } = req.body;
        const { atividade } = req.body;
        const { movimentacao } = req.body;
        const { quantidade } = req.body;

        const dados = new cadastroModel(data, quantidade, movimentacao, atividade);
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

    async deletePDS(req, res){
        const dados = new cadastroModel();
        const result = await dados.deletePDS(req.params.id);

        if(result){
            res.send({
                ok: true,
                msg: "Excluido com sucesso"
            })
        } else {
            res.send({
                ok: false,
                msg: "Não foi possivel excluir"
            })
        }
    }

    async alteracaoPDS(req, res){
        const { data } = req.body;
        const { atividade } = req.body;
        const { movimentacao } = req.body;
        const { quantidade } = req.body;
        const { id } = req.params;

        const dados = new cadastroModel(data, quantidade, movimentacao, atividade);
        const result = await dados.alteracaoPDS(id);

        if(result){
            res.send({
                ok: true,
                msg: "Alterado com sucesso"
            })
        } else {
            res.send({
                ok: false,
                msg: "Não foi possivel alterar"
            })
        }
    }

    async consultaId(req, res){
        const dados = new cadastroModel();
        const result = await dados.consultaID(req.params.id);
        res.send(result);
    }
}

module.exports = cadastroControllers;