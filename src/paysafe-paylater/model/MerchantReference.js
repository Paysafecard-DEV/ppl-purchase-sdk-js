/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

class MerchantReference {
    /**
     * @returns { String }
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @param { String } orderId
     */
    setOrderId(orderId) {
        this.orderId = ModelHelper.validatePrimitive(orderId, "string");
    }
    /**
     * @param { String } val
     */
    withOrderId(val) {
        this.setOrderId(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getCustomerId() {
        return this.customerId;
    }
    /**
     * @param { String } customerId
     */
    setCustomerId(customerId) {
        this.customerId = ModelHelper.validatePrimitive(customerId, "string");
    }
    /**
     * @param { String } val
     */
    withCustomerId(val) {
        this.setCustomerId(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getInvoiceId() {
        return this.invoiceId;
    }
    /**
     * @param { String } invoiceId
     */
    setInvoiceId(invoiceId) {
        this.invoiceId = ModelHelper.validatePrimitive(invoiceId, "string");
    }
    /**
     * @param { String } val
     */
    withInvoiceId(val) {
        this.setInvoiceId(val);
        return this;
    }

    /**
     * @returns { MerchantReference }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new MerchantReference()
            .withOrderId(ModelHelper.convertToType(data["orderId"], String))
            .withCustomerId(ModelHelper.convertToType(data["customerId"], String))
            .withInvoiceId(ModelHelper.convertToType(data["invoiceId"], String));
    }
}

module.exports = MerchantReference;
