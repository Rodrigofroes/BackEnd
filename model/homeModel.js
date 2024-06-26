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
        let sql = `select tb_tabela.tabela_id, tb_tabela.tabela_data, tb_tabela.tabela_quantidade,  tb_movimentacao.mov_nome, tb_atividade.ati_nome, tb_user.user_nome  from  tb_tabela 
                    inner join tb_movimentacao on  tb_movimentacao.mov_id = tb_tabela.mov_id 
                    inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id 
                    inner join tb_user on tb_tabela.id_user = tb_user.id_user
                    ORDER BY tb_tabela.tabela_id DESC`;
        const result = banco.ExecutaComando(sql);
        return result;
    }

    grafico(){
        let sql = `select tb_tabela.tabela_id, tb_tabela.tabela_data, tb_tabela.tabela_quantidade,  tb_movimentacao.mov_nome, tb_atividade.ati_nome, tb_user.user_nome from  tb_tabela 
        inner join tb_movimentacao on  tb_movimentacao.mov_id = tb_tabela.mov_id 
        inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id 
        inner join tb_user on tb_tabela.id_user = tb_user.id_user
        ORDER BY tb_tabela.tabela_data`
        const result = banco.ExecutaComando(sql);
        return result;
    }

    movimentacao(){
        let sql = "select * from tb_movimentacao ORDER BY mov_nome AND mov_id ASC";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    atividade(){
        let sql = "select * from tb_atividade ORDER BY ati_nome AND ati_id ASC";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    graficoAno(value){
        let sql = "select * from tb_tabela inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id inner join tb_movimentacao on tb_movimentacao.mov_id = tb_tabela.mov_id where tabela_data like ? order by tabela_data;"
        let valores = [value + '%'];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }

    graficoMes(mes){
        let sql = "select * from tb_tabela inner join tb_atividade on tb_atividade.ati_id = tb_tabela.ati_id inner join tb_movimentacao on tb_movimentacao.mov_id = tb_tabela.mov_id where tabela_data like ? order by tabela_data;"
        let valores = ['%' + mes + '%'];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }

    options(){
        let sql = "SELECT * FROM tb_tipo";
        const result = banco.ExecutaComando(sql);

        return result;
    }
}

module.exports = homeModel;