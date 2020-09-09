/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Occupation = require("./Occupation");

/**
 * Properties of a natural person.
 */
class Person {
    /**
     * @returns { String }
     */
    getSalutation() {
        return this.salutation;
    }
    /**
     * @param { String } salutation
     */
    setSalutation(salutation) {
        this.salutation = ModelHelper.validatePrimitive(salutation, "string");
    }
    /**
     * @param { String } val
     */
    withSalutation(val) {
        this.setSalutation(val);
        return this;
    }

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
     * @returns { Date }
     */
    getBirthdate() {
        return new Date(this.birthdate);
    }
    /**
     * @param { Date } birthdate
     */
    setBirthdate(birthdate) {
        this.birthdate = ModelHelper.validateDate(birthdate);
    }
    /**
     * @param { Date } val
     */
    withBirthdate(val) {
        this.setBirthdate(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getSocialId() {
        return this.socialId;
    }
    /**
     * @param { String } socialId
     */
    setSocialId(socialId) {
        this.socialId = ModelHelper.validatePrimitive(socialId, "string");
    }
    /**
     * @param { String } val
     */
    withSocialId(val) {
        this.setSocialId(val);
        return this;
    }

    /**
     * @returns { Occupation }
     */
    getOccupation() {
        return this.occupation;
    }
    /**
     * @param { Occupation } occupation
     */
    setOccupation(occupation) {
        this.occupation = ModelHelper.validateObject(occupation, Occupation);
    }
    /**
     * @param { Occupation } val
     */
    withOccupation(val) {
        this.setOccupation(val);
        return this;
    }

    /**
     * @returns { Person }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Person()
            .withSalutation(ModelHelper.convertToType(data["salutation"], String))
            .withFirstName(ModelHelper.convertToType(data["firstName"], String))
            .withLastName(ModelHelper.convertToType(data["lastName"], String))
            .withBirthdate(ModelHelper.convertToType(data["birthdate"], Date))
            .withSocialId(ModelHelper.convertToType(data["socialId"], String))
            .withOccupation(ModelHelper.convertToType(data["occupation"], Occupation));
    }
}

module.exports = Person;
