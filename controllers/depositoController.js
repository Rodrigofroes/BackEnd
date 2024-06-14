const depositoModel = require('../model/depositoModel');
const deposito = new depositoModel();

class depositoController{
    async listarDeposito(req, res){
        const result = await deposito.listarDeposito();
        res.json(result);
    }
}

module.exports = depositoController;