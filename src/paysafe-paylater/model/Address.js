/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Country = require("./Country");

/**
 * Represents a postal address of a consumer.
 */
class Address {
    /**
     * @returns { String }
     */
    getStreet() {
        return this.street;
    }
    /**
     * @param { String } street
     */
    setStreet(street) {
        this.street = ModelHelper.validatePrimitive(street, "string");
    }
    /**
     * @param { String } val
     */
    withStreet(val) {
        this.setStreet(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getHouseNumber() {
        return this.houseNumber;
    }
    /**
     * @param { String } houseNumber
     */
    setHouseNumber(houseNumber) {
        this.houseNumber = ModelHelper.validatePrimitive(houseNumber, "string");
    }
    /**
     * @param { String } val
     */
    withHouseNumber(val) {
        this.setHouseNumber(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getAdditionalInfo() {
        return this.additionalInfo;
    }
    /**
     * @param { String } additionalInfo
     */
    setAdditionalInfo(additionalInfo) {
        this.additionalInfo = ModelHelper.validatePrimitive(additionalInfo, "string");
    }
    /**
     * @param { String } val
     */
    withAdditionalInfo(val) {
        this.setAdditionalInfo(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getZipCode() {
        return this.zipCode;
    }
    /**
     * @param { String } zipCode
     */
    setZipCode(zipCode) {
        this.zipCode = ModelHelper.validatePrimitive(zipCode, "string");
    }
    /**
     * @param { String } val
     */
    withZipCode(val) {
        this.setZipCode(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getCity() {
        return this.city;
    }
    /**
     * @param { String } city
     */
    setCity(city) {
        this.city = ModelHelper.validatePrimitive(city, "string");
    }
    /**
     * @param { String } val
     */
    withCity(val) {
        this.setCity(val);
        return this;
    }

    /**
     * @returns { Country }
     */
    getCountryCode() {
        return this.countryCode;
    }
    /**
     * @param { Country } countryCode
     */
    setCountryCode(countryCode) {
        this.countryCode = ModelHelper.validateEnum(countryCode, Country, "Country");
    }
    /**
     * @param { Country } val
     */
    withCountryCode(val) {
        this.setCountryCode(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getState() {
        return this.state;
    }
    /**
     * @param { String } state
     */
    setState(state) {
        this.state = ModelHelper.validatePrimitive(state, "string");
    }
    /**
     * @param { String } val
     */
    withState(val) {
        this.setState(val);
        return this;
    }

    /**
     * @returns { Address }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Address()
            .withStreet(ModelHelper.convertToType(data["street"], String))
            .withHouseNumber(ModelHelper.convertToType(data["houseNumber"], String))
            .withAdditionalInfo(ModelHelper.convertToType(data["additionalInfo"], String))
            .withZipCode(ModelHelper.convertToType(data["zipCode"], String))
            .withCity(ModelHelper.convertToType(data["city"], String))
            .withCountryCode(ModelHelper.convertToType(data["countryCode"], Country))
            .withState(ModelHelper.convertToType(data["state"], String));
    }
}

module.exports = Address;
