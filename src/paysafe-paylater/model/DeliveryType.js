/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ValidationException = require("../exceptions/ValidationException");

module.exports = Object.freeze({
    BILLING_ADDRESS: "BILLING_ADDRESS",
    ALTERNATIVE_DELIVERY_ADDRESS: "ALTERNATIVE_DELIVERY_ADDRESS",
    SHOP_PICKUP: "SHOP_PICKUP",
    POST_OFFICE_PICKUP: "POST_OFFICE_PICKUP",
    constructFromObject: function (data) {
        if (data === null || data === undefined || this.hasOwnProperty(data)) {
            return data;
        }
        throw new ValidationException(`Could not find '${data}' in String.`);
    },
});
