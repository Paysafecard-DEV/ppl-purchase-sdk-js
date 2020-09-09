/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Ach = require("./Ach");
const Bacs = require("./Bacs");
const Country = require("./Country");
const Eft = require("./Eft");
const Sepa = require("./Sepa");

/**
 * Represents a bank account of a consumer. Contains holder information and different types of routing information.
 */
class Account {
    /**
     * @returns { String }
     */
    getHolder() {
        return this.holder;
    }
    /**
     * @param { String } holder
     */
    setHolder(holder) {
        this.holder = ModelHelper.validatePrimitive(holder, "string");
    }
    /**
     * @param { String } val
     */
    withHolder(val) {
        this.setHolder(val);
        return this;
    }

    /**
     * @returns { Country }
     */
    getCountry() {
        return this.country;
    }
    /**
     * @param { Country } country
     */
    setCountry(country) {
        this.country = ModelHelper.validateEnum(country, Country, "Country");
    }
    /**
     * @param { Country } val
     */
    withCountry(val) {
        this.setCountry(val);
        return this;
    }

    /**
     * @returns { Sepa }
     */
    getSepa() {
        return this.sepa;
    }
    /**
     * @param { Sepa } sepa
     */
    setSepa(sepa) {
        this.sepa = ModelHelper.validateObject(sepa, Sepa);
    }
    /**
     * @param { Sepa } val
     */
    withSepa(val) {
        this.setSepa(val);
        return this;
    }

    /**
     * @returns { Eft }
     */
    getEft() {
        return this.eft;
    }
    /**
     * @param { Eft } eft
     */
    setEft(eft) {
        this.eft = ModelHelper.validateObject(eft, Eft);
    }
    /**
     * @param { Eft } val
     */
    withEft(val) {
        this.setEft(val);
        return this;
    }

    /**
     * @returns { Ach }
     */
    getAch() {
        return this.ach;
    }
    /**
     * @param { Ach } ach
     */
    setAch(ach) {
        this.ach = ModelHelper.validateObject(ach, Ach);
    }
    /**
     * @param { Ach } val
     */
    withAch(val) {
        this.setAch(val);
        return this;
    }

    /**
     * @returns { Bacs }
     */
    getBacs() {
        return this.bacs;
    }
    /**
     * @param { Bacs } bacs
     */
    setBacs(bacs) {
        this.bacs = ModelHelper.validateObject(bacs, Bacs);
    }
    /**
     * @param { Bacs } val
     */
    withBacs(val) {
        this.setBacs(val);
        return this;
    }

    /**
     * @returns { Account }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Account()
            .withHolder(ModelHelper.convertToType(data["holder"], String))
            .withCountry(ModelHelper.convertToType(data["country"], Country))
            .withSepa(ModelHelper.convertToType(data["sepa"], Sepa))
            .withEft(ModelHelper.convertToType(data["eft"], Eft))
            .withAch(ModelHelper.convertToType(data["ach"], Ach))
            .withBacs(ModelHelper.convertToType(data["bacs"], Bacs));
    }
}

module.exports = Account;
