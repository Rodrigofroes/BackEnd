const database = require('../utils/database');
const banco =  new database();

class cadastroModel{
    #data
    #quantidade
    #movimentacao
    #atividade

    constructor(data, quantidade, movimentacao, atividade){
        this.#data = data,
        this.#quantidade = quantidade,
        this.#movimentacao = movimentacao,
        this.#atividade = atividade
    }

    get data(){
        return this.#data;
    }

    set data(data){
        this.#data = data;
    }

    get atividade(){
        return this.#atividade;
    }

    set atividade(atividade){
        this.#atividade = atividade;
    }

    get movimentacao(){
        return this.#movimentacao;
    }

    set movimentacao(movimentacao){
        this.#movimentacao = movimentacao;
    }

    get quantidade(){
        return this.#quantidade;
    }

    set quantidade(quantidade){
        this.#quantidade = quantidade;
    }

    cadastro(){
        const dataCriacao = new Date();
        let sql = "INSERT INTO tb_tabela (tabela_data, tabela_quantidade, tabela_dataCriacao, mov_id, ati_id) VALUES (?,?,?,?,?);"
        let valores = [this.#data, this.#quantidade, dataCriacao, this.#movimentacao,this.#atividade];
        console.log(valores);
        const result = banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    consultaPDS(){
        let sql = "SELECT * FROM tb_tabela";
        const result = banco.ExecutaComando(sql);

        return result;
    }

    deletePDS(id){
        let sql = "DELETE FROM tb_tabela WHERE tabela_id = ?";
        const result = banco.ExecutaComandoNonQuery(sql, id);

        return result;
    }

    alteracaoPDS(id){
        let sql = "UPDATE tb_tabela SET tabela_data = ?, tabela_quantidade = ?, mov_id = ?, ati_id = ? WHERE tabela_id = ?";
        let valores = [this.#data, this.#quantidade, this.#movimentacao, this.#atividade, id];
        const result = banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    listagem(){
        let sql = "select tb_tabela.tabela_id, tb_tabela.tabela_data, tb_tabela.tabela_quantidade,  tb_movimentacao.mov_nome, tb_atividade.ati_nome  from  tb_tabela inner join tb_movimentacao on  tb_movimentacao.mov_id = tb_tabela.mov_id inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id;";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    consultaID(id){
        let sql = "select tb_tabela.tabela_id, tb_tabela.tabela_data, tb_tabela.tabela_quantidade,  tb_movimentacao.mov_nome, tb_atividade.ati_nome  from  tb_tabela inner join tb_movimentacao on  tb_movimentacao.mov_id = tb_tabela.mov_id inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id where tb_tabela.tabela_id = ?;";
        const result = banco.ExecutaComando(sql, id);
        return result;
    }
}

module.exports = cadastroModel;