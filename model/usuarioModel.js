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
        let sql = "INSERT INTO tb_user (user_usuario, user_senha, tipo_id) VALUES (?,?,?);"
        let valores = [this.#usuario, this.#senha, this.#tipo];
        const result = await banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async verificar(){
        let sql = "SELECT * FROM tb_user WHERE user_usuario = ?";
        let valores = [this.#usuario];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }
    
    consulta(){
        let sql = "SELECT * FROM tb_usuario";
        const result = banco.ExecutaComando(sql);
        return result;
    }

    consultaId(){
        let sql = "SELECT * FROM tb_usuario WHERE usu_id = ?";
        let valores = [this.#id];
        const result = banco.ExecutaComando(sql, valores);
        return result;
    }

    delete(){
        let sql = "DELETE FROM tb_usuario WHERE usu_id = ?";
        let valores = [this.#id];
        const result = banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    alteracao(){
        let sql = "UPDATE tb_usuario SET usu_usuario = ?, usu_senha = ?, usu_tipo = ? WHERE usu_id = ?";
        let valores = [this.#usuario, this.#senha, this.#tipo, this.#id];
        const result = banco.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    login(){
        let sql = "SELECT * FROM tb_usuario WHERE usu_usuario = ? AND usu_senha = ?";
        let valores = [this.#usuario, this.#senha];
        const rows = banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['usu_id'], row['usu_usuario'], row['usu_senha'], row['usu_tipo']);
        }
        return null;
    }

    async obter(id) {
        let sql = "select * from tb_user where user_id = ?";
        let valores = [id];
        let rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['user_id'], row['user_usuario'], row['user_senha'], row['tipo_id']);
        }
        return null;
    }

    async obterPorUsuarioSenha(usuario, senha){
        let sql = "SELECT * FROM tb_user WHERE user_usuario = ? AND user_senha = ?";
        let valores = [usuario, senha];
        const rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0){
            let row = rows[0];
            return new usuarioModel(row['user_id'], row['user_usuario'], row['user_senha'], row['tipo_id']);
        }
        return null;
    }

}

module.exports = usuarioModel;