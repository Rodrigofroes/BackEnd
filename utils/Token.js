class Token {
  // Gerar token
  encodeToken(user_id, tipo_user) {
    const token = {
      id: user_id,
      tipo: tipo_user,
    };
    return btoa(JSON.stringify(token));
  }

  // Retornar id
  decodeToken(token) {
    const data = JSON.parse(atob(token));
    return data.id;
  }
}

module.exports = Token;
