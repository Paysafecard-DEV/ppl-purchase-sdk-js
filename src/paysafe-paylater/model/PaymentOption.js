/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Amount = require("./Amount");
const Contract = require("./Contract");
const Country = require("./Country");
const Currency = require("./Currency");
const Payment = require("./Payment");
const PaymentMethod = require("./PaymentMethod");
const ProductType = require("./ProductType");

class PaymentOption {
    /**
     * @returns { String }
     */
    getOptionId() {
        return this.optionId;
    }
    /**
     * @param { String } optionId
     */
    setOptionId(optionId) {
        this.optionId = ModelHelper.validatePrimitive(optionId, "string");
    }
    /**
     * @param { String } val
     */
    withOptionId(val) {
        this.setOptionId(val);
        return this;
    }

    /**
     * @returns { Country }
     */
    getConsumerCountry() {
        return this.consumerCountry;
    }
    /**
     * @param { Country } consumerCountry
     */
    setConsumerCountry(consumerCountry) {
        this.consumerCountry = ModelHelper.validateEnum(consumerCountry, Country, "Country");
    }
    /**
     * @param { Country } val
     */
    withConsumerCountry(val) {
        this.setConsumerCountry(val);
        return this;
    }

    /**
     * @returns { Currency }
     */
    getCurrency() {
        return this.currency;
    }
    /**
     * @param { Currency } currency
     */
    setCurrency(currency) {
        this.currency = ModelHelper.validateEnum(currency, Currency, "Currency");
    }
    /**
     * @param { Currency } val
     */
    withCurrency(val) {
        this.setCurrency(val);
        return this;
    }

    /**
     * @returns { ProductType }
     */
    getProductType() {
        return this.productType;
    }
    /**
     * @param { ProductType } productType
     */
    setProductType(productType) {
        this.productType = ModelHelper.validateEnum(productType, ProductType, "ProductType");
    }
    /**
     * @param { ProductType } val
     */
    withProductType(val) {
        this.setProductType(val);
        return this;
    }

    /**
     * @returns { [PaymentMethod] }
     */
    getSupportedPaymentMethods() {
        return this.supportedPaymentMethods;
    }
    /**
     * @param { [PaymentMethod] } supportedPaymentMethods
     */
    setSupportedPaymentMethods(supportedPaymentMethods) {
        this.supportedPaymentMethods = ModelHelper.validateArrayEnum(supportedPaymentMethods, PaymentMethod);
    }
    /**
     * @param { [PaymentMethod] } val
     */
    withSupportedPaymentMethods(val) {
        this.setSupportedPaymentMethods(val);
        return this;
    }
    /**
     * @param { PaymentMethod } val
     */
    addSupportedPaymentMethods(val) {
        val = ModelHelper.validateEnum(val, PaymentMethod, "PaymentMethod");
        this.supportedPaymentMethods = this.supportedPaymentMethods || [];
        this.supportedPaymentMethods.push(val);
    }

    /**
     * @returns { Amount }
     */
    getTotalAmount() {
        return this.totalAmount;
    }
    /**
     * @param { Amount } totalAmount
     */
    setTotalAmount(totalAmount) {
        this.totalAmount = ModelHelper.validateObject(totalAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withTotalAmount(val) {
        this.setTotalAmount(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getPurchaseAmount() {
        return this.purchaseAmount;
    }
    /**
     * @param { Amount } purchaseAmount
     */
    setPurchaseAmount(purchaseAmount) {
        this.purchaseAmount = ModelHelper.validateObject(purchaseAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withPurchaseAmount(val) {
        this.setPurchaseAmount(val);
        return this;
    }

    /**
     * @returns { Number }
     */
    getInterestRate() {
        return this.interestRate;
    }
    /**
     * @param { Number } interestRate
     */
    setInterestRate(interestRate) {
        this.interestRate = ModelHelper.validatePrimitive(interestRate, "number");
    }
    /**
     * @param { Number } val
     */
    withInterestRate(val) {
        this.setInterestRate(val);
        return this;
    }

    /**
     * @returns { Number }
     */
    getEffectiveInterestRate() {
        return this.effectiveInterestRate;
    }
    /**
     * @param { Number } effectiveInterestRate
     */
    setEffectiveInterestRate(effectiveInterestRate) {
        this.effectiveInterestRate = ModelHelper.validatePrimitive(effectiveInterestRate, "number");
    }
    /**
     * @param { Number } val
     */
    withEffectiveInterestRate(val) {
        this.setEffectiveInterestRate(val);
        return this;
    }

    /**
     * @returns { Number }
     */
    getNumberOfPayments() {
        return this.numberOfPayments;
    }
    /**
     * @param { Number } numberOfPayments
     */
    setNumberOfPayments(numberOfPayments) {
        this.numberOfPayments = ModelHelper.validatePrimitive(numberOfPayments, "number");
    }
    /**
     * @param { Number } val
     */
    withNumberOfPayments(val) {
        this.setNumberOfPayments(val);
        return this;
    }

    /**
     * @returns { [Payment] }
     */
    getPayments() {
        return this.payments;
    }
    /**
     * @param { [Payment] } payments
     */
    setPayments(payments) {
        this.payments = ModelHelper.validateArray(payments, Payment);
    }
    /**
     * @param { [Payment] } val
     */
    withPayments(val) {
        this.setPayments(val);
        return this;
    }
    /**
     * @param { Payment } val
     */
    addPayments(val) {
        val = ModelHelper.validateObject(val, Payment, "Payment");
        this.payments = this.payments || [];
        this.payments.push(val);
    }

    /**
     * @returns { [Contract] }
     */
    getContracts() {
        return this.contracts;
    }
    /**
     * @param { [Contract] } contracts
     */
    setContracts(contracts) {
        this.contracts = ModelHelper.validateArray(contracts, Contract);
    }
    /**
     * @param { [Contract] } val
     */
    withContracts(val) {
        this.setContracts(val);
        return this;
    }
    /**
     * @param { Contract } val
     */
    addContracts(val) {
        val = ModelHelper.validateObject(val, Contract, "Contract");
        this.contracts = this.contracts || [];
        this.contracts.push(val);
    }

    /**
     * @returns { PaymentOption }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new PaymentOption()
            .withOptionId(ModelHelper.convertToType(data["optionId"], String))
            .withConsumerCountry(ModelHelper.convertToType(data["consumerCountry"], Country))
            .withCurrency(ModelHelper.convertToType(data["currency"], Currency))
            .withProductType(ModelHelper.convertToType(data["productType"], ProductType))
            .withSupportedPaymentMethods(ModelHelper.convertToType(data["supportedPaymentMethods"], [PaymentMethod]))
            .withTotalAmount(ModelHelper.convertToType(data["totalAmount"], Amount))
            .withPurchaseAmount(ModelHelper.convertToType(data["purchaseAmount"], Amount))
            .withInterestRate(ModelHelper.convertToType(data["interestRate"], Number))
            .withEffectiveInterestRate(ModelHelper.convertToType(data["effectiveInterestRate"], Number))
            .withNumberOfPayments(ModelHelper.convertToType(data["numberOfPayments"], Number))
            .withPayments(ModelHelper.convertToType(data["payments"], [Payment]))
            .withContracts(ModelHelper.convertToType(data["contracts"], [Contract]));
    }
}

module.exports = PaymentOption;
