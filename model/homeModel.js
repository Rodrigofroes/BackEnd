const database = require('../utils/database');
const banco =  new database();

class homeModel{
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

    listagem(){
        let sql = "select tb_tabela.tabela_id, tb_tabela.tabela_data, tb_tabela.tabela_quantidade,  tb_movimentacao.mov_nome, tb_atividade.ati_nome  from  tb_tabela inner join tb_movimentacao on  tb_movimentacao.mov_id = tb_tabela.mov_id inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id ORDER BY tb_tabela.tabela_id DESC;";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    grafico(){
        let sql = "SELECT tb_tabela.tabela_data, tb_tabela.tabela_quantidade, tb_movimentacao.mov_nome, tb_atividade.ati_nome FROM tb_tabela INNER JOIN tb_movimentacao ON tb_movimentacao.mov_id = tb_tabela.mov_id INNER JOIN tb_atividade ON tb_atividade.ati_id = tb_tabela.ati_id ORDER BY tb_tabela.tabela_data ASC;"
        const result = banco.ExecutaComando(sql);
        return result;
    }

    movimentacao(){
        let sql = "select * from tb_movimentacao";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    atividade(){
        let sql = "select * from tb_atividade";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    filtro(dataInicio, dataFim){
        let sql = "select * from tb_tabela inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id inner join tb_movimentacao on tb_movimentacao.mov_id = tb_tabela.mov_id where tabela_data between ? and ? order by tabela_data;"
        let valores = [dataInicio, dataFim];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }
}

module.exports = homeModel;