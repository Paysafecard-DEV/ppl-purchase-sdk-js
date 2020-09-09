/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const Amount = require("./Amount");
const OperationStatus = require("./OperationStatus");

class OperationInformation {
    /**
     * @returns { String }
     */
    getOperationId() {
        return this.operationId;
    }
    /**
     * @param { String } operationId
     */
    setOperationId(operationId) {
        this.operationId = ModelHelper.validatePrimitive(operationId, "string");
    }
    /**
     * @param { String } val
     */
    withOperationId(val) {
        this.setOperationId(val);
        return this;
    }

    /**
     * @returns { OperationStatus }
     */
    getStatus() {
        return this.status;
    }
    /**
     * @param { OperationStatus } status
     */
    setStatus(status) {
        this.status = ModelHelper.validateEnum(status, OperationStatus, "OperationStatus");
    }
    /**
     * @param { OperationStatus } val
     */
    withStatus(val) {
        this.setStatus(val);
        return this;
    }

    /**
     * @returns { Date }
     */
    getProcessingDate() {
        return new Date(this.processingDate);
    }
    /**
     * @param { Date } processingDate
     */
    setProcessingDate(processingDate) {
        this.processingDate = ModelHelper.validateDate(processingDate);
    }
    /**
     * @param { Date } val
     */
    withProcessingDate(val) {
        this.setProcessingDate(val);
        return this;
    }

    /**
     * @returns { Amount }
     */
    getOperationAmount() {
        return this.operationAmount;
    }
    /**
     * @param { Amount } operationAmount
     */
    setOperationAmount(operationAmount) {
        this.operationAmount = ModelHelper.validateObject(operationAmount, Amount);
    }
    /**
     * @param { Amount } val
     */
    withOperationAmount(val) {
        this.setOperationAmount(val);
        return this;
    }

    /**
     * @returns { OperationInformation }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new OperationInformation()
            .withOperationId(ModelHelper.convertToType(data["operationId"], String))
            .withStatus(ModelHelper.convertToType(data["status"], OperationStatus))
            .withProcessingDate(ModelHelper.convertToType(data["processingDate"], Date))
            .withOperationAmount(ModelHelper.convertToType(data["operationAmount"], Amount));
    }
}

module.exports = OperationInformation;
