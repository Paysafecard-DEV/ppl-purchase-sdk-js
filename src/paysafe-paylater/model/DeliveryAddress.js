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
 * Address where goods can be delivered to.
 */
class DeliveryAddress {
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
     * @returns { Address }
     */
    getAddress() {
        return this.address;
    }
    /**
     * @param { Address } address
     */
    setAddress(address) {
        this.address = ModelHelper.validateObject(address, Address);
    }
    /**
     * @param { Address } val
     */
    withAddress(val) {
        this.setAddress(val);
        return this;
    }

    /**
     * @returns { DeliveryAddress }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new DeliveryAddress()
            .withFirstName(ModelHelper.convertToType(data["firstName"], String))
            .withLastName(ModelHelper.convertToType(data["lastName"], String))
            .withCompanyName(ModelHelper.convertToType(data["companyName"], String))
            .withAddress(ModelHelper.convertToType(data["address"], Address));
    }
}

module.exports = DeliveryAddress;
