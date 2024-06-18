const database = require('../utils/database');
const banco = new database();
class depositoModel {
    #id
    #entrada
    #saida
    #user
    #mes
    #ano


    constructor(id, entrada, saida, user, mes, ano) {
        this.#id = id;
        this.#entrada = entrada;
        this.#saida = saida;
        this.#user = user;
        this.#mes = mes;
        this.#ano = ano;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get entrada() {
        return this.#entrada;
    }

    set entrada(entrada) {
        this.#entrada = entrada;
    }

    get saida() {
        return this.#saida;
    }

    set saida(saida) {
        this.#saida = saida;
    }

    get user() {
        return this.#user;
    }

    set user(user) {
        this.#user = user;
    }

    get mes() {
        return this.#mes;
    }

    set mes(mes) {
        this.#mes = mes;
    }

    get ano() {
        return this.#ano;
    }

    set ano(ano) {
        this.#ano = ano;
    }

    async listarDeposito() {
        let sql = `SELECT tb_deposito.id, tb_deposito.entrada, tb_deposito.saida, tb_deposito.dataCriacao, tb_user.user_nome
                    FROM tb_deposito
                    INNER JOIN tb_user ON tb_deposito.id_user = tb_user.id_user ORDER BY tb_deposito.id DESC;`;
        const result = await banco.ExecutaComando(sql);
        return result;
    }

    async inserirDeposito(entrada, saida, id_user, data) {
        let sql = "INSERT INTO tb_deposito (entrada, saida, dataCriacao, id_user) VALUES (?, ?, ?, ?);";
        let valores = [entrada, saida, data, id_user];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async listarDepositoPorId(id) {
        let sql = "SELECT * FROM tb_deposito WHERE id = ?";
        let valores = [id];
        const result = await banco.ExecutaComando(sql, valores);
        return result;
    }

    async atualizarDeposito(id, entrada, saida, data) {
        let sql = "UPDATE tb_deposito SET entrada = ?, saida = ?,  dataCriacao = ? WHERE id = ?";
        let valores = [entrada, saida, data, id];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async deletarDeposito(id) {
        let sql = "DELETE FROM tb_deposito WHERE id = ?";
        let valores = [id];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async listarDepositoPorAno(ano) {
        let sql = "SELECT * FROM tb_deposito WHERE dataCriacao LIKE ? ORDER BY dataCriacao ASC;";
        let valores = [`${ano}%`]; 
        const result = await banco.ExecutaComando(sql, valores);
        return result;
    }
}

module.exports = depositoModel;