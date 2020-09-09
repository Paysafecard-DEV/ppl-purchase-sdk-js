/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

class Bacs {
    /**
     * @returns { String }
     */
    getAccountNumber() {
        return this.accountNumber;
    }
    /**
     * @param { String } accountNumber
     */
    setAccountNumber(accountNumber) {
        this.accountNumber = ModelHelper.validatePrimitive(accountNumber, "string");
    }
    /**
     * @param { String } val
     */
    withAccountNumber(val) {
        this.setAccountNumber(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getSortCode() {
        return this.sortCode;
    }
    /**
     * @param { String } sortCode
     */
    setSortCode(sortCode) {
        this.sortCode = ModelHelper.validatePrimitive(sortCode, "string");
    }
    /**
     * @param { String } val
     */
    withSortCode(val) {
        this.setSortCode(val);
        return this;
    }

    /**
     * @returns { Bacs }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Bacs()
            .withAccountNumber(ModelHelper.convertToType(data["accountNumber"], String))
            .withSortCode(ModelHelper.convertToType(data["sortCode"], String));
    }
}

module.exports = Bacs;
