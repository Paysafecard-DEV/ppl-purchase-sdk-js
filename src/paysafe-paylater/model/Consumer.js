/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Account = require("./Account");
const Address = require("./Address");
const Company = require("./Company");
const DeliveryAddress = require("./DeliveryAddress");
const DeliveryType = require("./DeliveryType");
const Language = require("./Language");
const Person = require("./Person");

/**
 * Represents a consumer.
 */
class Consumer {
    /**
     * @returns { Person }
     */
    getPerson() {
        return this.person;
    }
    /**
     * @param { Person } person
     */
    setPerson(person) {
        this.person = ModelHelper.validateObject(person, Person);
    }
    /**
     * @param { Person } val
     */
    withPerson(val) {
        this.setPerson(val);
        return this;
    }

    /**
     * @returns { Company }
     */
    getCompany() {
        return this.company;
    }
    /**
     * @param { Company } company
     */
    setCompany(company) {
        this.company = ModelHelper.validateObject(company, Company);
    }
    /**
     * @param { Company } val
     */
    withCompany(val) {
        this.setCompany(val);
        return this;
    }

    /**
     * @returns { Account }
     */
    getBankAccount() {
        return this.bankAccount;
    }
    /**
     * @param { Account } bankAccount
     */
    setBankAccount(bankAccount) {
        this.bankAccount = ModelHelper.validateObject(bankAccount, Account);
    }
    /**
     * @param { Account } val
     */
    withBankAccount(val) {
        this.setBankAccount(val);
        return this;
    }

    /**
     * @returns { Address }
     */
    getBillingAddress() {
        return this.billingAddress;
    }
    /**
     * @param { Address } billingAddress
     */
    setBillingAddress(billingAddress) {
        this.billingAddress = ModelHelper.validateObject(billingAddress, Address);
    }
    /**
     * @param { Address } val
     */
    withBillingAddress(val) {
        this.setBillingAddress(val);
        return this;
    }

    /**
     * @returns { DeliveryAddress }
     */
    getDeliveryAddress() {
        return this.deliveryAddress;
    }
    /**
     * @param { DeliveryAddress } deliveryAddress
     */
    setDeliveryAddress(deliveryAddress) {
        this.deliveryAddress = ModelHelper.validateObject(deliveryAddress, DeliveryAddress);
    }
    /**
     * @param { DeliveryAddress } val
     */
    withDeliveryAddress(val) {
        this.setDeliveryAddress(val);
        return this;
    }

    /**
     * @returns { DeliveryType }
     */
    getDeliveryType() {
        return this.deliveryType;
    }
    /**
     * @param { DeliveryType } deliveryType
     */
    setDeliveryType(deliveryType) {
        this.deliveryType = ModelHelper.validateEnum(deliveryType, DeliveryType, "DeliveryType");
    }
    /**
     * @param { DeliveryType } val
     */
    withDeliveryType(val) {
        this.setDeliveryType(val);
        return this;
    }

    /**
     * @returns { Language }
     */
    getLanguage() {
        return this.language;
    }
    /**
     * @param { Language } language
     */
    setLanguage(language) {
        this.language = ModelHelper.validateEnum(language, Language, "Language");
    }
    /**
     * @param { Language } val
     */
    withLanguage(val) {
        this.setLanguage(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getPhone() {
        return this.phone;
    }
    /**
     * @param { String } phone
     */
    setPhone(phone) {
        this.phone = ModelHelper.validatePrimitive(phone, "string");
    }
    /**
     * @param { String } val
     */
    withPhone(val) {
        this.setPhone(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getEmail() {
        return this.email;
    }
    /**
     * @param { String } email
     */
    setEmail(email) {
        this.email = ModelHelper.validatePrimitive(email, "string");
    }
    /**
     * @param { String } val
     */
    withEmail(val) {
        this.setEmail(val);
        return this;
    }

    /**
     * @returns { Consumer }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Consumer()
            .withPerson(ModelHelper.convertToType(data["person"], Person))
            .withCompany(ModelHelper.convertToType(data["company"], Company))
            .withBankAccount(ModelHelper.convertToType(data["bankAccount"], Account))
            .withBillingAddress(ModelHelper.convertToType(data["billingAddress"], Address))
            .withDeliveryAddress(ModelHelper.convertToType(data["deliveryAddress"], DeliveryAddress))
            .withDeliveryType(ModelHelper.convertToType(data["deliveryType"], DeliveryType))
            .withLanguage(ModelHelper.convertToType(data["language"], Language))
            .withPhone(ModelHelper.convertToType(data["phone"], String))
            .withEmail(ModelHelper.convertToType(data["email"], String));
    }
}

module.exports = Consumer;
