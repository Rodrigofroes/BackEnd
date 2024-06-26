const depositoModel = require('../model/depositoModel');
const deposito = new depositoModel();
const Token = require('../utils/Token');

class depositoController {
    async listarDeposito(req, res) {
        const result = await deposito.listarDeposito();
        res.send(result);
    }

    async inserirDeposito(req, res) {
        const { entrada, saida, data } = req.body;
        const userId = new Token().decodeToken(req.cookies.token);
        const result = await deposito.inserirDeposito(entrada, saida, userId, data);
        if (result) {
            res.send({
                ok: true,
                msg: "Depósito inserido com sucesso!"
            })
        } else {
            res.send({
                ok: false,
                msg: "Erro ao inserir depósito!"
            })
        }
    }

    async alterarDeposito(req, res) {
        const { id, entrada, saida, data } = req.body;
        const result = await deposito.atualizarDeposito(id, entrada, saida, data);
        if (result) {
            res.send({
                ok: true,
                msg: "Depósito alterado com sucesso!"
            })
        } else {
            res.send({
                ok: false,
                msg: "Erro ao alterar depósito!"
            })
        }
    }

    async excluirDeposito(req, res) {
        const { id } = req.body;
        const result = await deposito.deletarDeposito(id);
        if (result) {
            res.send({
                ok: true,
                msg: "Depósito excluído com sucesso!"
            })
        } else {
            res.send({
                ok: false,
                msg: "Erro ao excluir depósito!"
            })
        }
    }

    async consultarDeposito(req, res) {
        const id = req.params.id;
        const result = await deposito.listarDepositoPorId(id);
        res.send(result);
    }

    async consultarDepositoPorAno(req, res) {
        const  ano  = req.params.ano;
        const result = await deposito.listarDepositoPorAno(ano);
        res.send(result);
    }

}

module.exports = depositoController;