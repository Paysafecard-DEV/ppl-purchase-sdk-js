/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

class Eft {
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
    getTransitNumber() {
        return this.transitNumber;
    }
    /**
     * @param { String } transitNumber
     */
    setTransitNumber(transitNumber) {
        this.transitNumber = ModelHelper.validatePrimitive(transitNumber, "string");
    }
    /**
     * @param { String } val
     */
    withTransitNumber(val) {
        this.setTransitNumber(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getInstitutionId() {
        return this.institutionId;
    }
    /**
     * @param { String } institutionId
     */
    setInstitutionId(institutionId) {
        this.institutionId = ModelHelper.validatePrimitive(institutionId, "string");
    }
    /**
     * @param { String } val
     */
    withInstitutionId(val) {
        this.setInstitutionId(val);
        return this;
    }

    /**
     * @returns { Eft }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Eft()
            .withAccountNumber(ModelHelper.convertToType(data["accountNumber"], String))
            .withTransitNumber(ModelHelper.convertToType(data["transitNumber"], String))
            .withInstitutionId(ModelHelper.convertToType(data["institutionId"], String));
    }
}

module.exports = Eft;
