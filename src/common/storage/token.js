const jwtDecode = require('jwt-decode');

class _Token {

  decode = (token) => jwtDecode(token || this.get());

  isTokenValid = () => {
    try {
      return jwtDecode(this.get()) !== undefined;
    } catch (e) {
      return false;
    }
  };

  get() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  setToken(type, token) {
    if(type === 'local')
      return localStorage.setItem('token', token);
    return sessionStorage.setItem('token', token);
  }
}

export const Token = new _Token()