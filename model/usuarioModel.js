const Database = require('../utils/database');
const banco = new Database();

class usuarioModel{
    #id
    #usuario
    #senha
    #tipo

    constructor(id, usuario, senha, tipo){
        this.#id = id,
        this.#usuario = usuario,
        this.#senha = senha,
        this.#tipo = tipo
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get usuario(){
        return this.#usuario;
    }

    set usuario(usuario){
        this.#usuario = usuario;
    }

    get senha(){
        return this.#senha;
    }

    set senha(senha){
        this.#senha = senha;
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(tipo){
        this.#tipo = tipo;
    }

    async cadastro(){
        let sql = "INSERT INTO tb_user (user_nome, user_senha, tipo_user) VALUES (?,?,?);"
        let valores = [this.#usuario, this.#senha, this.#tipo];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async verificar(){
        let sql = "SELECT * FROM tb_user WHERE user_nome = ?";
        let valores = [this.#usuario];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }
    
    consulta(){
        let sql = "SELECT tb_user.id_user,tb_user.user_nome, tb_tipo.tipo_nome FROM tb_user INNER JOIN tb_tipo ON tb_user.tipo_user = tb_tipo.id ORDER BY tb_user.id_user DESC;";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    login(){
        let sql = "SELECT * FROM tb_user WHERE user_nome = ? AND user_senha = ?";
        let valores = [this.#usuario, this.#senha];
        const rows = banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['id_user'], row['user_nome'], row['user_senha'], row['tipo_user']);
        }
        return null;
    }

    async obter(id) {
        let sql = "select * from tb_user where id_user = ?";
        let valores = [id];
        let rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['id_user'], row['user_nome'], row['user_senha'], row['tipo_user']);
        }
        return null;
    }

    async obterPorUsuarioSenha(usuario, senha){
        let sql = "SELECT * FROM tb_user WHERE user_nome = ? AND user_senha = ?";
        let valores = [usuario, senha];
        const rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['id_user'], row['user_nome'], row['user_senha'], row['tipo_user']);
        }
        return null;
    }

}

module.exports = usuarioModel;