const database = require('../utils/database');
const banco = new database();
class atividadeModel{
    #id
    #atividade

    constructor(id, atividade){
        this.#id = id;
        this.#atividade = atividade;
    }

    get id(){
        return this.#id;
    }

    get atividade(){
        return this.#atividade;
    }

    set id(id){
        this.#id = id;
    }

    set atividade(atividade){
        this.#atividade = atividade;
    }

    async deletarAtividade(){
        let sql = "DELETE FROM tb_atividade WHERE ati_id = ?";
        const valor = [this.#id];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async cadastrarAtividade(){
        let sql = "INSERT INTO tb_atividade (ati_nome) VALUES (?)";
        const valor = [this.#atividade];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async alterarAtividade(){
        let sql = "UPDATE tb_atividade SET ati_nome = ? WHERE ati_id = ?";
        const valor = [this.#atividade, this.#id];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }
}

module.exports = atividadeModel;