const atividadeModel = require('../model/atividadeModel');

class atividadeController {
    deletarAtividade(req, res) {
        const dados = new atividadeModel(req.params.id, "", "");
        const result = dados.deletarAtividade();

        if (result) {
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
    cadastrarAtividade(req, res) {
        const { atividade } = req.body;
        const dados = new atividadeModel("", atividade);
        const result = dados.cadastrarAtividade();

        if (result) {
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

    async alterarAtividade(req, res) {
        const { id } = req.body;
        const { atividade } = req.body;
        const dados = new atividadeModel(id, atividade);
        const result = await dados.alterarAtividade();

        if (result) {
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
}

module.exports = atividadeController;