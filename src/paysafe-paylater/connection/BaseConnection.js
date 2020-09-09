const ValidationException = require("../exceptions/ValidationException");
const AuthorizationException = require("../exceptions/AuthorizationException");
const ReferenceException = require("../exceptions/ReferenceException");
const PaysafeException = require("../exceptions/PaysafeException");
const ApiException = require("../exceptions/ApiException");

const PurchaseOperationResponse = require("../model/PurchaseOperationResponse");

/**
 *Creates an instance of BaseConnection.
 * @memberof BaseConnection
 */

class BaseConnection {
    /**
     * Handle Response error
     * @param {Error} error Error
     * @param {Number} status Status code
     */
    handleResponseError(error, status) {
        // console.log("error : ", JSON.stringify(error, null, 2));
        let operationResult = null;
        if (error.response && error.hasOwnProperty("response") && error['response'].hasOwnProperty('data')) {
            let operationResponse = PurchaseOperationResponse.constructFromObject(error['response']['data']);
            if (operationResponse) {
                operationResult = operationResponse.getResult();
            }
        }
        switch (status) {
            case 400:
                throw new ValidationException(status, operationResult, error);
            case 401:
            case 403:
                throw new AuthorizationException(status, operationResult, error);
            case 404:
            case 409:
            case 410:
                throw new ReferenceException(status, operationResult, error);
            case 500:
            case 502:
            case 503:
                throw new PaysafeException(status, operationResult, error);
            default:
                throw new ApiException(status, operationResult, error);
        }
    }

    handleRequestError(error) {
        throw new ApiException(status, null, error);
    }
}

module.exports = BaseConnection;
