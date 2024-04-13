const database = require('../utils/database');
const banco =  new database();

class cadastroModel{
    #data
    #nome
    #atividade
    #movimentacao
    #quantidade

    constructor(data, nome, atividade, movimentacao, quantidade){
        this.#data = data,
        this.#nome = nome,
        this.#atividade = atividade,
        this.#movimentacao = movimentacao,
        this.#quantidade = quantidade
    }

    get data(){
        return this.#data;
    }

    set data(data){
        this.#data = data;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
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
        let sql = "INSERT INTO tb_tabela (data, nome, atividade, movimentacao, quantidade) VALUES (?,?,?,?,?);"
        let valores = [this.#data, this.#nome, this.#atividade, this.#movimentacao, this.#quantidade];
        console.log(valores);
        const result = banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    consultaPDS(){
        let sql = "SELECT * FROM tb_tabela";
        const result = banco.ExecutaComando(sql);

        return result;
    }

}

module.exports = cadastroModel;