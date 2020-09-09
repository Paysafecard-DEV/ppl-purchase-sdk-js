/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Address = require("./Address");

/**
 * Occupation of a person.
 */
class Occupation {
    /**
     * @returns { String }
     */
    getName() {
        return this.name;
    }
    /**
     * @param { String } name
     */
    setName(name) {
        this.name = ModelHelper.validatePrimitive(name, "string");
    }
    /**
     * @param { String } val
     */
    withName(val) {
        this.setName(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getYearlyGrossSalary() {
        return this.yearlyGrossSalary;
    }
    /**
     * @param { String } yearlyGrossSalary
     */
    setYearlyGrossSalary(yearlyGrossSalary) {
        this.yearlyGrossSalary = ModelHelper.validatePrimitive(yearlyGrossSalary, "string");
    }
    /**
     * @param { String } val
     */
    withYearlyGrossSalary(val) {
        this.setYearlyGrossSalary(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getEmployersName() {
        return this.employersName;
    }
    /**
     * @param { String } employersName
     */
    setEmployersName(employersName) {
        this.employersName = ModelHelper.validatePrimitive(employersName, "string");
    }
    /**
     * @param { String } val
     */
    withEmployersName(val) {
        this.setEmployersName(val);
        return this;
    }

    /**
     * @returns { Address }
     */
    getEmployersAddress() {
        return this.employersAddress;
    }
    /**
     * @param { Address } employersAddress
     */
    setEmployersAddress(employersAddress) {
        this.employersAddress = ModelHelper.validateObject(employersAddress, Address);
    }
    /**
     * @param { Address } val
     */
    withEmployersAddress(val) {
        this.setEmployersAddress(val);
        return this;
    }

    /**
     * @returns { Occupation }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Occupation()
            .withName(ModelHelper.convertToType(data["name"], String))
            .withYearlyGrossSalary(ModelHelper.convertToType(data["yearlyGrossSalary"], String))
            .withEmployersName(ModelHelper.convertToType(data["employersName"], String))
            .withEmployersAddress(ModelHelper.convertToType(data["employersAddress"], Address));
    }
}

module.exports = Occupation;
