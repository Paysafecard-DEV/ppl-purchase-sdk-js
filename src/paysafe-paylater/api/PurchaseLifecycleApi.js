/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

"use strict";

const PurchaseOperationResponse = require("../model/PurchaseOperationResponse");
const { populateUri } = require("../util/ApiHelper");

/**
 * @class PurchaseLifecycleApi
 *
 *
 */
class PurchaseLifecycleApi {
    constructor(communicator) {
        this.communicator = communicator;
    }

    /**
     * Query for a purchase for a given purchaseId.
     * PurchaseLifecycle endpoints always return the same object with the latest state of the purchase and different fields populated.PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null.
     *
     * @param purchaseId PurchaseId received from initializePurchase or authorizePurchase response.
     * @param authorization The access token received from the initialize request. Provide this for client-side requests in the Bearer format.
     * @return { Promise<PurchaseOperationResponse> } a Promise that will return a PurchaseOperationResponse.
     */
    getPurchase(purchaseId, authorization) {
        const uri = populateUri("/purchase/info/{purchaseId}", ["purchaseId"], [purchaseId]);

        const headerParams = {
            Authorization: authorization,
        };

        return this.communicator.execute("GET", uri, headerParams, null).then((r) => PurchaseOperationResponse.constructFromObject(r.data));
    }
}

module.exports = PurchaseLifecycleApi;
