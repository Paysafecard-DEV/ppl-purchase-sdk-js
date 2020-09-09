const ApiException = require("./ApiException");

class AuthorizationException extends ApiException {
  constructor(...params) {
    super(...params)
    this.name = 'AuthorizationException'
  }
}

module.exports = AuthorizationException;