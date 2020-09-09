/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

/**
 * Consumer verification possibilities.
 */
class ConsumerVerification {
    /**
     * @returns { String }
     */
    getInitializeUrl() {
        return this.initializeUrl;
    }
    /**
     * @param { String } initializeUrl
     */
    setInitializeUrl(initializeUrl) {
        this.initializeUrl = ModelHelper.validatePrimitive(initializeUrl, "string");
    }
    /**
     * @param { String } val
     */
    withInitializeUrl(val) {
        this.setInitializeUrl(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getVerifyUrl() {
        return this.verifyUrl;
    }
    /**
     * @param { String } verifyUrl
     */
    setVerifyUrl(verifyUrl) {
        this.verifyUrl = ModelHelper.validatePrimitive(verifyUrl, "string");
    }
    /**
     * @param { String } val
     */
    withVerifyUrl(val) {
        this.setVerifyUrl(val);
        return this;
    }

    /**
     * Flag to state that consumer data are available.
     * @returns { Boolean }
     */
    getConsumerDataAvailable() {
        return this.consumerDataAvailable;
    }
    /**
     * Flag to state that consumer data are available.
     * @param { Boolean } consumerDataAvailable
     */
    setConsumerDataAvailable(consumerDataAvailable) {
        this.consumerDataAvailable = ModelHelper.validateBoolean(consumerDataAvailable);
    }
    /**
     * Flag to state that consumer data are available.
     * @param { Boolean } val
     */
    withConsumerDataAvailable(val) {
        this.setConsumerDataAvailable(val);
        return this;
    }

    /**
     * @returns { ConsumerVerification }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new ConsumerVerification()
            .withInitializeUrl(ModelHelper.convertToType(data["initializeUrl"], String))
            .withVerifyUrl(ModelHelper.convertToType(data["verifyUrl"], String))
            .withConsumerDataAvailable(ModelHelper.convertToType(data["consumerDataAvailable"], Boolean));
    }
}

module.exports = ConsumerVerification;
