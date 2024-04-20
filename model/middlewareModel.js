const database = require('../utils/database');
const banco =  new database();

class middlewareModel{
    #login
    #senha

    constructor(login, senha){
        this.#login = login,
        this.#senha = senha
    }

    get login(){
        return this.#login;
    }

    set login(login){
        this.#login = login;
    }

    get senha(){
        return this.#senha;
    }

    set senha(senha){
        this.#senha = senha;
    }

    async consultar(){
        const sql = "SELECT * FROM tb_credencial WHERE cre_usuario = ? AND cre_senha = ?";
        const valores = [this.#login, this.#senha];

        const result = await banco.ExecutaComando(sql, valores);

        return result;
    }

    async register(){
        const sql = "INSERT INTO tb_credencial (cre_usuario, cre_senha, tipo_id, dados_id) VALUES (?, ?, ?, ?)";
        const valores = [this.#login, this.#senha, 1, 1];

        const result = await banco.ExecutaComando(sql, valores);

        return result;
    }

}

module.exports = middlewareModel;