const movimentacaoModel = require('../model/movimentacaoModel');
class movimentacaoController{
    deletarMovimentacao(req, res){
        const dados = new movimentacaoModel(req.params.id, "");
        const result = dados.deletarMovimentacao();

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
    cadastrarMovimentacao(req, res){
        const { movimentacao } = req.body;
        const dados = new movimentacaoModel("", movimentacao);
        const result = dados.cadastrarMovimentacao();

        if(result){
            res.send({
                ok: true,
                msg: "Cadastrado com sucesso"
            })
        } else {
            res.send({
                ok: false,
                msg: "Não foi possivel cadastrar"
            })
        }
    }

    async alterarMovimentacao(req, res){
        const { id } = req.body;
        const { movimentacao } = req.body;
        const dados = new movimentacaoModel(id, movimentacao);
        const result = await dados.alterarMovimentacao();

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

    async listarMovimentacaoPorId(req, res){
        const dados = new movimentacaoModel(req.params.id, "");
        const result = await dados.consultaID();
        res.send(result);
    }

    async listarMovimentacao(req, res){
        const dados = new movimentacaoModel();
        const result = await dados.listarMovimentacao();
        res.send(result);
    }
}

module.exports = movimentacaoController;