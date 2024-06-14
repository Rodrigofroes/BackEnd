const database = require('../utils/database');
const banco = new database();
class depositoModel{
    #id
    #deposito
    #user

    constructor(id, deposito, user){
        this.#id = id;
        this.#deposito = deposito;
        this.#user = user;
    }

    get id(){
        return this.#id;
    }

    get user(){
        return this.#user;
    }

    get deposito(){
        return this.#deposito;
    }

    set id(id){
        this.#id = id;
    }

    set user(user){
        this.#user = user;
    }

    set deposito(deposito){
        this.#deposito = deposito;
    }

    async listarDeposito(){
        let sql = "SELECT * FROM tb_deposito";
        const result = await banco.ExecutaComando(sql);
        return result;
    }
}

module.exports = depositoModel;