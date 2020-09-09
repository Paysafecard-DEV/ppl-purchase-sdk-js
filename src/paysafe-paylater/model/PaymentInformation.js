/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Account = require("./Account");
const PaymentMethod = require("./PaymentMethod");
const PaymentOption = require("./PaymentOption");

class PaymentInformation {
    /**
     * @returns { String }
     */
    getPaymentReference() {
        return this.paymentReference;
    }
    /**
     * @param { String } paymentReference
     */
    setPaymentReference(paymentReference) {
        this.paymentReference = ModelHelper.validatePrimitive(paymentReference, "string");
    }
    /**
     * @param { String } val
     */
    withPaymentReference(val) {
        this.setPaymentReference(val);
        return this;
    }

    /**
     * @returns { Account }
     */
    getAccount() {
        return this.account;
    }
    /**
     * @param { Account } account
     */
    setAccount(account) {
        this.account = ModelHelper.validateObject(account, Account);
    }
    /**
     * @param { Account } val
     */
    withAccount(val) {
        this.setAccount(val);
        return this;
    }

    /**
     * @returns { PaymentMethod }
     */
    getPaymentMethod() {
        return this.paymentMethod;
    }
    /**
     * @param { PaymentMethod } paymentMethod
     */
    setPaymentMethod(paymentMethod) {
        this.paymentMethod = ModelHelper.validateEnum(paymentMethod, PaymentMethod, "PaymentMethod");
    }
    /**
     * @param { PaymentMethod } val
     */
    withPaymentMethod(val) {
        this.setPaymentMethod(val);
        return this;
    }

    /**
     * @returns { PaymentOption }
     */
    getConfirmedPaymentOption() {
        return this.confirmedPaymentOption;
    }
    /**
     * @param { PaymentOption } confirmedPaymentOption
     */
    setConfirmedPaymentOption(confirmedPaymentOption) {
        this.confirmedPaymentOption = ModelHelper.validateObject(confirmedPaymentOption, PaymentOption);
    }
    /**
     * @param { PaymentOption } val
     */
    withConfirmedPaymentOption(val) {
        this.setConfirmedPaymentOption(val);
        return this;
    }

    /**
     * @returns { PaymentInformation }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new PaymentInformation()
            .withPaymentReference(ModelHelper.convertToType(data["paymentReference"], String))
            .withAccount(ModelHelper.convertToType(data["account"], Account))
            .withPaymentMethod(ModelHelper.convertToType(data["paymentMethod"], PaymentMethod))
            .withConfirmedPaymentOption(ModelHelper.convertToType(data["confirmedPaymentOption"], PaymentOption));
    }
}

module.exports = PaymentInformation;
