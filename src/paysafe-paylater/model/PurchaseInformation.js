/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Amount = require("./Amount");
const Consumer = require("./Consumer");
const ConsumerVerification = require("./ConsumerVerification");
const Currency = require("./Currency");
const Document = require("./Document");
const MerchantReference = require("./MerchantReference");
const OperationInformation = require("./OperationInformation");
const PaymentInformation = require("./PaymentInformation");
const PaymentOption = require("./PaymentOption");
const PurchaseState = require("./PurchaseState");

/**
 * Describes the current state of a purchase.
 */
class PurchaseInformation {
    /**
     * @returns { String }
     */
    getPurchaseId() {
        return this.purchaseId;
    }
    /**
     * @param { String } purchaseId
     */
    setPurchaseId(purchaseId) {
        this.purchaseId = ModelHelper.validatePrimitive(purchaseId, "string");
    }
    /**
     * @param { String } val
     */
    withPurchaseId(val) {
        this.setPurchaseId(val);
        return this;
    }

    /**
     * @returns { PurchaseState }
     */
    getState() {
        return this.state;
    }
    /**
     * @param { PurchaseState } state
     */
    setState(state) {
        this.state = ModelHelper.validateEnum(state, PurchaseState, "PurchaseState");
    }
    /**
     * @param { PurchaseState } val
     */
    withState(val) {
        this.setState(val);
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
     * @returns { Amount }
     */
    getAuthorizedAmount() {
        return this.authorizedAmount;
    }
    /**
     * @param { Amount } authorizedAmount
     */
    setAuthorizedAmount(authorizedAmount) {
        this.authorizedAmount = ModelHelper.validateObject(authorizedAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withAuthorizedAmount(val) {
        this.setAuthorizedAmount(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getCapturedAmount() {
        return this.capturedAmount;
    }
    /**
     * @param { Amount } capturedAmount
     */
    setCapturedAmount(capturedAmount) {
        this.capturedAmount = ModelHelper.validateObject(capturedAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withCapturedAmount(val) {
        this.setCapturedAmount(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getRemainingCaptureAmount() {
        return this.remainingCaptureAmount;
    }
    /**
     * @param { Amount } remainingCaptureAmount
     */
    setRemainingCaptureAmount(remainingCaptureAmount) {
        this.remainingCaptureAmount = ModelHelper.validateObject(remainingCaptureAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withRemainingCaptureAmount(val) {
        this.setRemainingCaptureAmount(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getRefundedAmount() {
        return this.refundedAmount;
    }
    /**
     * @param { Amount } refundedAmount
     */
    setRefundedAmount(refundedAmount) {
        this.refundedAmount = ModelHelper.validateObject(refundedAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withRefundedAmount(val) {
        this.setRefundedAmount(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getRemainingRefundableAmount() {
        return this.remainingRefundableAmount;
    }
    /**
     * @param { Amount } remainingRefundableAmount
     */
    setRemainingRefundableAmount(remainingRefundableAmount) {
        this.remainingRefundableAmount = ModelHelper.validateObject(remainingRefundableAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withRemainingRefundableAmount(val) {
        this.setRemainingRefundableAmount(val);
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
     * @returns { Consumer }
     */
    getConsumer() {
        return this.consumer;
    }
    /**
     * @param { Consumer } consumer
     */
    setConsumer(consumer) {
        this.consumer = ModelHelper.validateObject(consumer, Consumer);
    }
    /**
     * @param { Consumer } val
     */
    withConsumer(val) {
        this.setConsumer(val);
        return this;
    }

    /**
     * @returns { ConsumerVerification }
     */
    getConsumerVerification() {
        return this.consumerVerification;
    }
    /**
     * @param { ConsumerVerification } consumerVerification
     */
    setConsumerVerification(consumerVerification) {
        this.consumerVerification = ModelHelper.validateObject(consumerVerification, ConsumerVerification);
    }
    /**
     * @param { ConsumerVerification } val
     */
    withConsumerVerification(val) {
        this.setConsumerVerification(val);
        return this;
    }

    /**
     * @returns { MerchantReference }
     */
    getMerchantReference() {
        return this.merchantReference;
    }
    /**
     * @param { MerchantReference } merchantReference
     */
    setMerchantReference(merchantReference) {
        this.merchantReference = ModelHelper.validateObject(merchantReference, MerchantReference);
    }
    /**
     * @param { MerchantReference } val
     */
    withMerchantReference(val) {
        this.setMerchantReference(val);
        return this;
    }

    /**
     * @returns { PaymentInformation }
     */
    getPaymentInformation() {
        return this.paymentInformation;
    }
    /**
     * @param { PaymentInformation } paymentInformation
     */
    setPaymentInformation(paymentInformation) {
        this.paymentInformation = ModelHelper.validateObject(paymentInformation, PaymentInformation);
    }
    /**
     * @param { PaymentInformation } val
     */
    withPaymentInformation(val) {
        this.setPaymentInformation(val);
        return this;
    }

    /**
     * @returns { [PaymentOption] }
     */
    getPaymentOptions() {
        return this.paymentOptions;
    }
    /**
     * @param { [PaymentOption] } paymentOptions
     */
    setPaymentOptions(paymentOptions) {
        this.paymentOptions = ModelHelper.validateArray(paymentOptions, PaymentOption);
    }
    /**
     * @param { [PaymentOption] } val
     */
    withPaymentOptions(val) {
        this.setPaymentOptions(val);
        return this;
    }
    /**
     * @param { PaymentOption } val
     */
    addPaymentOptions(val) {
        val = ModelHelper.validateObject(val, PaymentOption, "PaymentOption");
        this.paymentOptions = this.paymentOptions || [];
        this.paymentOptions.push(val);
    }

    /**
     * Performed captures.
     * @returns { [OperationInformation] }
     */
    getCaptures() {
        return this.captures;
    }
    /**
     * Performed captures.
     * @param { [OperationInformation] } captures
     */
    setCaptures(captures) {
        this.captures = ModelHelper.validateArray(captures, OperationInformation);
    }
    /**
     * Performed captures.
     * @param { [OperationInformation] } val
     */
    withCaptures(val) {
        this.setCaptures(val);
        return this;
    }
    /**
     * Performed captures.
     * @param { OperationInformation } val
     */
    addCaptures(val) {
        val = ModelHelper.validateObject(val, OperationInformation, "OperationInformation");
        this.captures = this.captures || [];
        this.captures.push(val);
    }

    /**
     * Performed refunds.
     * @returns { [OperationInformation] }
     */
    getRefunds() {
        return this.refunds;
    }
    /**
     * Performed refunds.
     * @param { [OperationInformation] } refunds
     */
    setRefunds(refunds) {
        this.refunds = ModelHelper.validateArray(refunds, OperationInformation);
    }
    /**
     * Performed refunds.
     * @param { [OperationInformation] } val
     */
    withRefunds(val) {
        this.setRefunds(val);
        return this;
    }
    /**
     * Performed refunds.
     * @param { OperationInformation } val
     */
    addRefunds(val) {
        val = ModelHelper.validateObject(val, OperationInformation, "OperationInformation");
        this.refunds = this.refunds || [];
        this.refunds.push(val);
    }

    /**
     * Static documents.
     * @returns { [Document] }
     */
    getDocuments() {
        return this.documents;
    }
    /**
     * Static documents.
     * @param { [Document] } documents
     */
    setDocuments(documents) {
        this.documents = ModelHelper.validateArray(documents, Document);
    }
    /**
     * Static documents.
     * @param { [Document] } val
     */
    withDocuments(val) {
        this.setDocuments(val);
        return this;
    }
    /**
     * Static documents.
     * @param { Document } val
     */
    addDocuments(val) {
        val = ModelHelper.validateObject(val, Document, "Document");
        this.documents = this.documents || [];
        this.documents.push(val);
    }

    /**
     * Additional information provided as a key value map.
     * @returns { {String: String} }
     */
    getMetaData() {
        return this.metaData;
    }
    /**
     * Additional information provided as a key value map.
     * @param { {String: String} } metaData
     */
    setMetaData(metaData) {
        this.metaData = ModelHelper.validateMap(metaData, "string", "string");
    }
    /**
     * Additional information provided as a key value map.
     * @param { {String: String} } val
     */
    withMetaData(val) {
        this.setMetaData(val);
        return this;
    }
    /**
     * Additional information provided as a key value map.
     * @param { String } key
     * @param { String } val
     */
    addMetaData(key, val) {
        key = ModelHelper.validatePrimitive(key, "string", "metaData[key]");
        val = ModelHelper.validatePrimitive(val, "string", "metaData[value]");
        this.metaData = this.metaData || {};
        this.metaData[key] = val;
    }

    /**
     * @returns { PurchaseInformation }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new PurchaseInformation()
            .withPurchaseId(ModelHelper.convertToType(data["purchaseId"], String))
            .withState(ModelHelper.convertToType(data["state"], PurchaseState))
            .withCurrency(ModelHelper.convertToType(data["currency"], Currency))
            .withAuthorizedAmount(ModelHelper.convertToType(data["authorizedAmount"], Amount))
            .withCapturedAmount(ModelHelper.convertToType(data["capturedAmount"], Amount))
            .withRemainingCaptureAmount(ModelHelper.convertToType(data["remainingCaptureAmount"], Amount))
            .withRefundedAmount(ModelHelper.convertToType(data["refundedAmount"], Amount))
            .withRemainingRefundableAmount(ModelHelper.convertToType(data["remainingRefundableAmount"], Amount))
            .withPurchaseAmount(ModelHelper.convertToType(data["purchaseAmount"], Amount))
            .withConsumer(ModelHelper.convertToType(data["consumer"], Consumer))
            .withConsumerVerification(ModelHelper.convertToType(data["consumerVerification"], ConsumerVerification))
            .withMerchantReference(ModelHelper.convertToType(data["merchantReference"], MerchantReference))
            .withPaymentInformation(ModelHelper.convertToType(data["paymentInformation"], PaymentInformation))
            .withPaymentOptions(ModelHelper.convertToType(data["paymentOptions"], [PaymentOption]))
            .withCaptures(ModelHelper.convertToType(data["captures"], [OperationInformation]))
            .withRefunds(ModelHelper.convertToType(data["refunds"], [OperationInformation]))
            .withDocuments(ModelHelper.convertToType(data["documents"], [Document]))
            .withMetaData(ModelHelper.convertToType(data["metaData"], { String: String }));
    }
}

module.exports = PurchaseInformation;
