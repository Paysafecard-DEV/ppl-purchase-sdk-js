/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const LogisticsProvider = require("./LogisticsProvider");

class DeliveryInformation {
    /**
     * @returns { Date }
     */
    getExpectedShippingDate() {
        return new Date(this.expectedShippingDate);
    }
    /**
     * @param { Date } expectedShippingDate
     */
    setExpectedShippingDate(expectedShippingDate) {
        this.expectedShippingDate = ModelHelper.validateDate(expectedShippingDate);
    }
    /**
     * @param { Date } val
     */
    withExpectedShippingDate(val) {
        this.setExpectedShippingDate(val);
        return this;
    }

    /**
     * @returns { LogisticsProvider }
     */
    getLogisticsProvider() {
        return this.logisticsProvider;
    }
    /**
     * @param { LogisticsProvider } logisticsProvider
     */
    setLogisticsProvider(logisticsProvider) {
        this.logisticsProvider = ModelHelper.validateEnum(logisticsProvider, LogisticsProvider, "LogisticsProvider");
    }
    /**
     * @param { LogisticsProvider } val
     */
    withLogisticsProvider(val) {
        this.setLogisticsProvider(val);
        return this;
    }

    /**
     * The tracking number of the logistics provider.
     * @returns { String }
     */
    getTrackingNumber() {
        return this.trackingNumber;
    }
    /**
     * The tracking number of the logistics provider.
     * @param { String } trackingNumber
     */
    setTrackingNumber(trackingNumber) {
        this.trackingNumber = ModelHelper.validatePrimitive(trackingNumber, "string");
    }
    /**
     * The tracking number of the logistics provider.
     * @param { String } val
     */
    withTrackingNumber(val) {
        this.setTrackingNumber(val);
        return this;
    }

    /**
     * @returns { DeliveryInformation }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new DeliveryInformation()
            .withExpectedShippingDate(ModelHelper.convertToType(data["expectedShippingDate"], Date))
            .withLogisticsProvider(ModelHelper.convertToType(data["logisticsProvider"], LogisticsProvider))
            .withTrackingNumber(ModelHelper.convertToType(data["trackingNumber"], String));
    }
}

module.exports = DeliveryInformation;
