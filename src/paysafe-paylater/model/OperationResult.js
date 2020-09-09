/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const OperationStatus = require("./OperationStatus");

/**
 * Describes the result of an operation performed on a purchase.
 */
class OperationResult {
    /**
     * Unique identifier of the operation performed.
     * @returns { String }
     */
    getOperationId() {
        return this.operationId;
    }
    /**
     * Unique identifier of the operation performed.
     * @param { String } operationId
     */
    setOperationId(operationId) {
        this.operationId = ModelHelper.validatePrimitive(operationId, "string");
    }
    /**
     * Unique identifier of the operation performed.
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
     * Code:
     * `0.0.0` - "Operation performed sucessfully"
     * `0.0.1` - "Duplicate request: Operation already performed sucessfully"
     * `1.0.0` - "Operation performed sucessfully. Final result pending"
     * `2.0.0` - "Operation permanently declined"
     * `2.1.0` - "Operation declined (retryable)"
     * `2.1.1` - "Customer has exceeded limit"
     * `3.0.0` - "Missing field"
     * `3.1.0` - "Invalid input data"
     * `4.0.0` - "Incorrect workflow state"
     * `4.1.0` - "Wrong purchase state"
     * `4.2.0` - "Unknown reference"
     * `4.3.0` - "Invalid product"
     * `4.4.0` - "Duplicate request"
     * `4.5.0` - "User not authorized"
     * `4.5.1` - "User not authorized. Product inactive"
     * `5.0.0` - "Internal error"
     * `5.1.0` - "Processing service unavailable (retryable)"
     * `6.0.0` - "Internal error: Operation result undefined"
     * @returns { String }
     */
    getStatusCode() {
        return this.statusCode;
    }
    /**
     * Code:
     * `0.0.0` - "Operation performed sucessfully"
     * `0.0.1` - "Duplicate request: Operation already performed sucessfully"
     * `1.0.0` - "Operation performed sucessfully. Final result pending"
     * `2.0.0` - "Operation permanently declined"
     * `2.1.0` - "Operation declined (retryable)"
     * `2.1.1` - "Customer has exceeded limit"
     * `3.0.0` - "Missing field"
     * `3.1.0` - "Invalid input data"
     * `4.0.0` - "Incorrect workflow state"
     * `4.1.0` - "Wrong purchase state"
     * `4.2.0` - "Unknown reference"
     * `4.3.0` - "Invalid product"
     * `4.4.0` - "Duplicate request"
     * `4.5.0` - "User not authorized"
     * `4.5.1` - "User not authorized. Product inactive"
     * `5.0.0` - "Internal error"
     * `5.1.0` - "Processing service unavailable (retryable)"
     * `6.0.0` - "Internal error: Operation result undefined"
     * @param { String } statusCode
     */
    setStatusCode(statusCode) {
        this.statusCode = ModelHelper.validatePrimitive(statusCode, "string");
    }
    /**
     * Code:
     * `0.0.0` - "Operation performed sucessfully"
     * `0.0.1` - "Duplicate request: Operation already performed sucessfully"
     * `1.0.0` - "Operation performed sucessfully. Final result pending"
     * `2.0.0` - "Operation permanently declined"
     * `2.1.0` - "Operation declined (retryable)"
     * `2.1.1` - "Customer has exceeded limit"
     * `3.0.0` - "Missing field"
     * `3.1.0` - "Invalid input data"
     * `4.0.0` - "Incorrect workflow state"
     * `4.1.0` - "Wrong purchase state"
     * `4.2.0` - "Unknown reference"
     * `4.3.0` - "Invalid product"
     * `4.4.0` - "Duplicate request"
     * `4.5.0` - "User not authorized"
     * `4.5.1` - "User not authorized. Product inactive"
     * `5.0.0` - "Internal error"
     * `5.1.0` - "Processing service unavailable (retryable)"
     * `6.0.0` - "Internal error: Operation result undefined"
     * @param { String } val
     */
    withStatusCode(val) {
        this.setStatusCode(val);
        return this;
    }

    /**
     * A human-readable description giving additional information about the result status.
     * @returns { String }
     */
    getStatusMessage() {
        return this.statusMessage;
    }
    /**
     * A human-readable description giving additional information about the result status.
     * @param { String } statusMessage
     */
    setStatusMessage(statusMessage) {
        this.statusMessage = ModelHelper.validatePrimitive(statusMessage, "string");
    }
    /**
     * A human-readable description giving additional information about the result status.
     * @param { String } val
     */
    withStatusMessage(val) {
        this.setStatusMessage(val);
        return this;
    }

    /**
     * Timestamp when operation processing has started.
     * @returns { Date }
     */
    getProcessingStart() {
        return new Date(this.processingStart);
    }
    /**
     * Timestamp when operation processing has started.
     * @param { Date } processingStart
     */
    setProcessingStart(processingStart) {
        this.processingStart = ModelHelper.validateDate(processingStart);
    }
    /**
     * Timestamp when operation processing has started.
     * @param { Date } val
     */
    withProcessingStart(val) {
        this.setProcessingStart(val);
        return this;
    }

    /**
     * Timestamp when operation processing has finished.
     * @returns { Date }
     */
    getProcessingEnd() {
        return new Date(this.processingEnd);
    }
    /**
     * Timestamp when operation processing has finished.
     * @param { Date } processingEnd
     */
    setProcessingEnd(processingEnd) {
        this.processingEnd = ModelHelper.validateDate(processingEnd);
    }
    /**
     * Timestamp when operation processing has finished.
     * @param { Date } val
     */
    withProcessingEnd(val) {
        this.setProcessingEnd(val);
        return this;
    }

    /**
     * @returns { OperationResult }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new OperationResult()
            .withOperationId(ModelHelper.convertToType(data["operationId"], String))
            .withStatus(ModelHelper.convertToType(data["status"], OperationStatus))
            .withStatusCode(ModelHelper.convertToType(data["statusCode"], String))
            .withStatusMessage(ModelHelper.convertToType(data["statusMessage"], String))
            .withProcessingStart(ModelHelper.convertToType(data["processingStart"], Date))
            .withProcessingEnd(ModelHelper.convertToType(data["processingEnd"], Date));
    }
}

module.exports = OperationResult;
