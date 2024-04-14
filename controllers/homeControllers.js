const homeModel = require('../model/homeModel');

class homeControllers{
    async listagem(req, res){
        const home = new homeModel();
        const result = await home.listagem();
        res.json(result);
    }

    async grafico(req, res){
        const home = new homeModel();
        const result = await home.grafico();
        res.json(result);
    }

    async movimentacao(req, res){
        const home = new homeModel();
        const result = await home.movimentacao();
        res.json(result);
    }

    async atividade(req, res){
        const home = new homeModel();
        const result = await home.atividade();
        res.json(result);
    }
}

module.exports = homeControllers;