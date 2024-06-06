class Token {
  encodeToken(id_user, tipo_user) {
    const token = {
      id: id_user,
      tipo: tipo_user,
    };
    return btoa(JSON.stringify(token));
  }

  decodeToken(token) {
    const data = JSON.parse(atob(token));
    return data.id;
  }
}

module.exports = Token;
