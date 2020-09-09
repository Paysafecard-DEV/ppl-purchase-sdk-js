/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const MethodType = require("./MethodType");

class AuthorizePurchaseRequest {
    /**
     * Constructor for all fields required by the object.
     * @param { String } purchaseId
     * @param { MethodType } method
     */
    constructor(purchaseId, method) {
        this.purchaseId = ModelHelper.validatePrimitive(purchaseId, "string");
        this.method = ModelHelper.validateEnum(method, MethodType, "MethodType");
    }

    /**
     * PurchaseId received from initializePurchase or authorizePurchase response.
     * @returns { String }
     */
    getPurchaseId() {
        return this.purchaseId;
    }
    /**
     * PurchaseId received from initializePurchase or authorizePurchase response.
     * @param { String } purchaseId
     */
    setPurchaseId(purchaseId) {
        this.purchaseId = ModelHelper.validatePrimitive(purchaseId, "string");
    }
    /**
     * PurchaseId received from initializePurchase or authorizePurchase response.
     * @param { String } val
     */
    withPurchaseId(val) {
        this.setPurchaseId(val);
        return this;
    }

    /**
     * If method 'SMS' is chosen, a phone number must be provided and will receive a message to start the verify process.
     * @returns { String }
     */
    getPhone() {
        return this.phone;
    }
    /**
     * If method 'SMS' is chosen, a phone number must be provided and will receive a message to start the verify process.
     * @param { String } phone
     */
    setPhone(phone) {
        this.phone = ModelHelper.validatePrimitive(phone, "string");
    }
    /**
     * If method 'SMS' is chosen, a phone number must be provided and will receive a message to start the verify process.
     * @param { String } val
     */
    withPhone(val) {
        this.setPhone(val);
        return this;
    }

    /**
     * @returns { MethodType }
     */
    getMethod() {
        return this.method;
    }
    /**
     * @param { MethodType } method
     */
    setMethod(method) {
        this.method = ModelHelper.validateEnum(method, MethodType, "MethodType");
    }
    /**
     * @param { MethodType } val
     */
    withMethod(val) {
        this.setMethod(val);
        return this;
    }

    /**
     * Redirect URL for the merchant after finishing the flow.
     * @returns { String }
     */
    getSuccessUrl() {
        return this.successUrl;
    }
    /**
     * Redirect URL for the merchant after finishing the flow.
     * @param { String } successUrl
     */
    setSuccessUrl(successUrl) {
        this.successUrl = ModelHelper.validatePrimitive(successUrl, "string");
    }
    /**
     * Redirect URL for the merchant after finishing the flow.
     * @param { String } val
     */
    withSuccessUrl(val) {
        this.setSuccessUrl(val);
        return this;
    }

    /**
     * After successfully finishing the flow, this URL will receive a callback to indicate completion to the merchant.
     * @returns { String }
     */
    getCallbackUrl() {
        return this.callbackUrl;
    }
    /**
     * After successfully finishing the flow, this URL will receive a callback to indicate completion to the merchant.
     * @param { String } callbackUrl
     */
    setCallbackUrl(callbackUrl) {
        this.callbackUrl = ModelHelper.validatePrimitive(callbackUrl, "string");
    }
    /**
     * After successfully finishing the flow, this URL will receive a callback to indicate completion to the merchant.
     * @param { String } val
     */
    withCallbackUrl(val) {
        this.setCallbackUrl(val);
        return this;
    }

    /**
     * @returns { AuthorizePurchaseRequest }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        const purchaseId = ModelHelper.convertToType(data["purchaseId"], String);
        const method = ModelHelper.convertToType(data["method"], MethodType);
        return new AuthorizePurchaseRequest(purchaseId, method)
            .withPhone(ModelHelper.convertToType(data["phone"], String))
            .withSuccessUrl(ModelHelper.convertToType(data["successUrl"], String))
            .withCallbackUrl(ModelHelper.convertToType(data["callbackUrl"], String));
    }
}

module.exports = AuthorizePurchaseRequest;
