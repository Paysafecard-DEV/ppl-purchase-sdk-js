/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const AchAccountType = require("./AchAccountType");

class Ach {
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
     * @returns { AchAccountType }
     */
    getAccountType() {
        return this.accountType;
    }
    /**
     * @param { AchAccountType } accountType
     */
    setAccountType(accountType) {
        this.accountType = ModelHelper.validateEnum(accountType, AchAccountType, "AchAccountType");
    }
    /**
     * @param { AchAccountType } val
     */
    withAccountType(val) {
        this.setAccountType(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getRoutingNumber() {
        return this.routingNumber;
    }
    /**
     * @param { String } routingNumber
     */
    setRoutingNumber(routingNumber) {
        this.routingNumber = ModelHelper.validatePrimitive(routingNumber, "string");
    }
    /**
     * @param { String } val
     */
    withRoutingNumber(val) {
        this.setRoutingNumber(val);
        return this;
    }

    /**
     * @returns { Ach }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Ach()
            .withAccountNumber(ModelHelper.convertToType(data["accountNumber"], String))
            .withAccountType(ModelHelper.convertToType(data["accountType"], AchAccountType))
            .withRoutingNumber(ModelHelper.convertToType(data["routingNumber"], String));
    }
}

module.exports = Ach;
