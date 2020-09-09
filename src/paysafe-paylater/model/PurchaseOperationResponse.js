/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const OperationResult = require("./OperationResult");
const PurchaseInformation = require("./PurchaseInformation");

class PurchaseOperationResponse {
    /**
     * @returns { OperationResult }
     */
    getResult() {
        return this.result;
    }
    /**
     * @param { OperationResult } result
     */
    setResult(result) {
        this.result = ModelHelper.validateObject(result, OperationResult);
    }
    /**
     * @param { OperationResult } val
     */
    withResult(val) {
        this.setResult(val);
        return this;
    }

    /**
     * @returns { PurchaseInformation }
     */
    getPurchase() {
        return this.purchase;
    }
    /**
     * @param { PurchaseInformation } purchase
     */
    setPurchase(purchase) {
        this.purchase = ModelHelper.validateObject(purchase, PurchaseInformation);
    }
    /**
     * @param { PurchaseInformation } val
     */
    withPurchase(val) {
        this.setPurchase(val);
        return this;
    }

    /**
     * @returns { PurchaseOperationResponse }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new PurchaseOperationResponse()
            .withResult(ModelHelper.convertToType(data["result"], OperationResult))
            .withPurchase(ModelHelper.convertToType(data["purchase"], PurchaseInformation));
    }
}

module.exports = PurchaseOperationResponse;
