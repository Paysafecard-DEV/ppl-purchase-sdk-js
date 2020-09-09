/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

/**
 * Status of the operation.
 */

const ValidationException = require("../exceptions/ValidationException");

module.exports = Object.freeze({
    OK: "OK",
    NOK: "NOK",
    ERROR: "ERROR",
    PENDING: "PENDING",
    UNKNOWN: "UNKNOWN",
    constructFromObject: function (data) {
        if (data === null || data === undefined || this.hasOwnProperty(data)) {
            return data;
        }
        throw new ValidationException(`Could not find '${data}' in String.`);
    },
});
