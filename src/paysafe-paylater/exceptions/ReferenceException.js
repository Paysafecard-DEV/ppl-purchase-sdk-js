const ApiException = require("./ApiException");

class ReferenceException extends ApiException {
  constructor(...params) {
    super(...params)
    this.name = 'ReferenceException'
  }
}

module.exports = ReferenceException;