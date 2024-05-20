const banco = require('mysql2');

class database{
    #conexao

    get conexao(){
        return this.#conexao
    }

    set conexao(conexao){
        this.#conexao = conexao
    }

     constructor(){
        this.#conexao = banco.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '',
            database: 'futfanatics'
        });
    }
    // Comando DDL
    ExecutaComando(sql, valores){
        var cann = this.#conexao;
        return new Promise( (res, rej)=> {
            cann.query(sql, valores, (error, result) => {
                if(error){
                    rej(error);
                } else{
                    res(result);
                }
            });
        });
    }
    // Comando DML
    ExecutaComandoNonQuery(sql, valores){ 
        var cann = this.#conexao;
        return new Promise( (res, rej)=> {
            cann.query(sql, valores, (error, result) => {
                if(error){
                    rej(error);
                } else{
                    res(result.affectedRows > 0);
                }
            });
        });
    }
    
    ExecutaComandoLastInserted(sql, valores){
        var cann = this.#conexao;
        return new Promise( (res, rej)=> {
            cann.query(sql, valores, (error, result) => {
                if(error){
                    rej(error);
                } else{
                    res(result.insertId);
                }
            });
        });
    }

}

module.exports = database;



