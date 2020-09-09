/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Currency = require("./Currency");

class Amount {
    /**
     * Constructor for all fields required by the object.
     * @param { Number } amount
     * @param { Currency } currency
     */
    constructor(amount, currency) {
        this.amount = ModelHelper.validatePrimitive(amount, "number");
        this.currency = ModelHelper.validateEnum(currency, Currency, "Currency");
    }

    /**
     * Amount in cents.
     * @returns { Number }
     */
    getAmount() {
        return this.amount;
    }
    /**
     * Amount in cents.
     * @param { Number } amount
     */
    setAmount(amount) {
        this.amount = ModelHelper.validatePrimitive(amount, "number");
    }
    /**
     * Amount in cents.
     * @param { Number } val
     */
    withAmount(val) {
        this.setAmount(val);
        return this;
    }

    /**
     * @returns { Currency }
     */
    getCurrency() {
        return this.currency;
    }
    /**
     * @param { Currency } currency
     */
    setCurrency(currency) {
        this.currency = ModelHelper.validateEnum(currency, Currency, "Currency");
    }
    /**
     * @param { Currency } val
     */
    withCurrency(val) {
        this.setCurrency(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        const amount = ModelHelper.convertToType(data["amount"], Number);
        const currency = ModelHelper.convertToType(data["currency"], Currency);
        return new Amount(amount, currency);
    }
}

module.exports = Amount;
