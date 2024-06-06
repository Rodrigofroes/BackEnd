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
            host: '132.226.245.178',
            user: '10442313038',
            password: '10442313038',
            database: 'PFS1_10442313038'
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



