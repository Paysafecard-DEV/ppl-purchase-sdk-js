const ApiException = require("./ApiException");

class ValidationException extends ApiException {
  constructor(...params) {
    super(...params)
    this.name = 'ValidationException'
  }
}

module.exports = ValidationException;