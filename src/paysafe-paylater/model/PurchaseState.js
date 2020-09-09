/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ValidationException = require("../exceptions/ValidationException");

module.exports = Object.freeze({
    INITIALIZED: "INITIALIZED",
    PRECHECKED: "PRECHECKED",
    DECLINED: "DECLINED",
    AUTHORIZED: "AUTHORIZED",
    AUTHORIZATION_PENDING: "AUTHORIZATION_PENDING",
    CANCELLED: "CANCELLED",
    FULFILLMENT: "FULFILLMENT",
    BLOCKED: "BLOCKED",
    TIMED_OUT: "TIMED_OUT",
    CLOSED: "CLOSED",
    constructFromObject: function (data) {
        if (data === null || data === undefined || this.hasOwnProperty(data)) {
            return data;
        }
        throw new ValidationException(`Could not find '${data}' in String.`);
    },
});
