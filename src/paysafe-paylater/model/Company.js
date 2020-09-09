/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

/**
 * Representation of a company.
 */
class Company {
    /**
     * @returns { String }
     */
    getFirstName() {
        return this.firstName;
    }
    /**
     * @param { String } firstName
     */
    setFirstName(firstName) {
        this.firstName = ModelHelper.validatePrimitive(firstName, "string");
    }
    /**
     * @param { String } val
     */
    withFirstName(val) {
        this.setFirstName(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getLastName() {
        return this.lastName;
    }
    /**
     * @param { String } lastName
     */
    setLastName(lastName) {
        this.lastName = ModelHelper.validatePrimitive(lastName, "string");
    }
    /**
     * @param { String } val
     */
    withLastName(val) {
        this.setLastName(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getCompanyName() {
        return this.companyName;
    }
    /**
     * @param { String } companyName
     */
    setCompanyName(companyName) {
        this.companyName = ModelHelper.validatePrimitive(companyName, "string");
    }
    /**
     * @param { String } val
     */
    withCompanyName(val) {
        this.setCompanyName(val);
        return this;
    }

    /**
     * @returns { Company }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Company()
            .withFirstName(ModelHelper.convertToType(data["firstName"], String))
            .withLastName(ModelHelper.convertToType(data["lastName"], String))
            .withCompanyName(ModelHelper.convertToType(data["companyName"], String));
    }
}

module.exports = Company;
