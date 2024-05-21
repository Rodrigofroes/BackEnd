class Token {
  // Gerar token
  encodeToken(user_id, user_tipo) {
    const token = {
      id: user_id
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
