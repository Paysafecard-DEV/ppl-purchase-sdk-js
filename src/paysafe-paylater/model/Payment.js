/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Amount = require("./Amount");

class Payment {
    /**
     * @returns { Date }
     */
    getDueDate() {
        return new Date(this.dueDate);
    }
    /**
     * @param { Date } dueDate
     */
    setDueDate(dueDate) {
        this.dueDate = ModelHelper.validateDate(dueDate);
    }
    /**
     * @param { Date } val
     */
    withDueDate(val) {
        this.setDueDate(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getPaymentAmount() {
        return this.paymentAmount;
    }
    /**
     * @param { Amount } paymentAmount
     */
    setPaymentAmount(paymentAmount) {
        this.paymentAmount = ModelHelper.validateObject(paymentAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withPaymentAmount(val) {
        this.setPaymentAmount(val);
        return this;
    }

    /**
     * @returns { Payment }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Payment()
            .withDueDate(ModelHelper.convertToType(data["dueDate"], Date))
            .withPaymentAmount(ModelHelper.convertToType(data["paymentAmount"], Amount));
    }
}

module.exports = Payment;
