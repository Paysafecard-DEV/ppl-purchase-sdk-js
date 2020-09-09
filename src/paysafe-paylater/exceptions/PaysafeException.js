const ApiException = require("./ApiException");

class PaysafeException extends ApiException {
  constructor(...params) {
    super(...params)
    this.name = 'PaysafeException'
  }
}

module.exports = PaysafeException;