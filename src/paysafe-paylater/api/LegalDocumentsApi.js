/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

"use strict";

const { populateUri } = require("../util/ApiHelper");

/**
 * @class LegalDocumentsApi
 *
 *
 */
class LegalDocumentsApi {
    constructor(communicator) {
        this.communicator = communicator;
    }

    /**
     * Generates a terms-and-conditions document in html format.
     * Terms and conditions in HTML format.
     *
     * @param purchaseId The purchaseId received from the initialize request that started the verification process.
     * @param authorization The access token received from the initialize request. Provide this for client-side requests in the Bearer format.
     * @return { Promise<String> } a Promise that will return a String.
     */
    getTermsAndConditions(purchaseId, authorization) {
        const uri = populateUri("/purchase/legaldocuments/termsandconditions/{purchaseId}", ["purchaseId"], [purchaseId]);

        const headerParams = {
            Authorization: authorization,
        };

        return this.communicator.execute("GET", uri, headerParams, null).then((r) => r.data);
    }
}

module.exports = LegalDocumentsApi;
