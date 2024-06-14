const database = require('../utils/database');
const banco = new database();
class movimentacaoModel{
    #id 
    #movimentacao

    constructor(id, movimentacao){
        this.#id = id;
        this.#movimentacao = movimentacao;
    }

    get id(){
        return this.#id;
    }

    get movimentacao(){
        return this.#movimentacao;
    }

    set id(id){
        this.#id = id;
    }

    set movimentacao(movimentacao){
        this.#movimentacao = movimentacao;
    }

    async deletarMovimentacao(){
        let sql = "DELETE FROM tb_movimentacao WHERE mov_id = ?";
        const valor = [this.#id];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async cadastrarMovimentacao(){
        let sql = "INSERT INTO tb_movimentacao (mov_nome) VALUES (?)";
        const valor = [this.#movimentacao];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async alterarMovimentacao(){
        let sql = "UPDATE tb_movimentacao SET mov_nome = ? WHERE mov_id = ?";
        const valor = [this.#movimentacao, this.#id];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async consultaID(){
        let sql = "SELECT * FROM tb_movimentacao WHERE mov_id = ?";
        const valor = [this.#id];
        const result = await banco.ExecutaComando(sql, valor);
        return result;
    }

    async listarMovimentacao(){
        let sql = "SELECT * FROM tb_movimentacao ORDER BY mov_nome ASC";
        const result = await banco.ExecutaComando(sql);
        return result;
    }
}

module.exports = movimentacaoModel;