/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

"use strict";

const AuthorizePurchaseRequest = require("../model/AuthorizePurchaseRequest");
const PurchaseOperationResponse = require("../model/PurchaseOperationResponse");
const { populateUri } = require("../util/ApiHelper");

/**
 * @class PurchaseAuthorizationApi
 *
 *
 */
class PurchaseAuthorizationApi {
    constructor(communicator) {
        this.communicator = communicator;
    }

    /**
     * Authorize a consumer to complete a transaction with our hosted solution. Can be started via SMS or URL.
     * PurchaseAuthorization endpoints always return the same object with different state of the purchase and different fields populated. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null. PurchaseLifecycle endpoints also return the same object when an error occurs. The purchase object however will be null.
     *
     * @param authorizePurchaseRequest Contains everything needed to start the Authorization Process.
     * @param authorization The access token received from the initialize request. Provide this for client-side requests in the Bearer format.
     * @return { Promise<PurchaseOperationResponse> } a Promise that will return a PurchaseOperationResponse.
     */
    authorizePayLater(authorizePurchaseRequest, authorization) {
        const uri = "/purchase/authorize/paylater";
        const request =
            authorizePurchaseRequest instanceof AuthorizePurchaseRequest
                ? authorizePurchaseRequest
                : AuthorizePurchaseRequest.constructFromObject(authorizePurchaseRequest);

        const headerParams = {
            Authorization: authorization,
        };

        return this.communicator
            .execute("POST", uri, headerParams, authorizePurchaseRequest)
            .then((r) => PurchaseOperationResponse.constructFromObject(r.data));
    }
}

module.exports = PurchaseAuthorizationApi;
