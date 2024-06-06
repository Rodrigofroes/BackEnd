const homeModel = require('../model/homeModel');

class homeControllers {
    async listagem(req, res) {
        const home = new homeModel();
        const result = await home.listagem();
        res.json(result);
    }

    async grafico(req, res) {
        const home = new homeModel();
        const result = await home.grafico();
        res.json(result);
    }

    async graficoAno(req, res) {
        const home = new homeModel();
        const result = await home.graficoAno(req.params.value);
        res.json(result);
    }

    async graficoMes(req, res) {
        const home = new homeModel();
        const result = await home.graficoMes(req.params.value);
        res.json(result);
    }

    async movimentacao(req, res) {
        const home = new homeModel();
        const result = await home.movimentacao();
        res.json(result);
    }

    async atividade(req, res) {
        const home = new homeModel();
        const result = await home.atividade();
        res.json(result);
    }
    async options(req, res){
        const dados = new homeModel();
        const result = await dados.options();
        res.send(result);
    }
}

module.exports = homeControllers;