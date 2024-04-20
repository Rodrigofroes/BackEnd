const middlewareModel = require("../model/middlewareModel");

class middlewareControllers{ 
   async auth(req, res, next) {
        const { login, senha } = req.body;

        const buscar = new middlewareModel(login, senha);
        const dados = await buscar.consultar();

        if(dados.length > 0){
            res.send({
                msg: "Acesso permitido"
            })
            next();
        } else {
            res.status(401).send({
                msg: "Acesso negado"
            })
        }
    }

    async register(req, res, next) {
        const { login, senha } = req.body;

        const buscar = new middlewareModel(login, senha);
        const dados = await buscar.consultar();

        if(dados.length > 0){
            res.status(401).send({
                msg: "Usuário já cadastrado"
            })
        } else {
            await buscar.register();
            res.send({
                msg: "Usuário cadastrado com sucesso"
            })
        }
    }

}

module.exports = middlewareControllers;