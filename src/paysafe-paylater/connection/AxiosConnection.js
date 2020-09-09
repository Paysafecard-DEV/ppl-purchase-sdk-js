
/**
 * Connection configuration
 * @typedef {Object} ConnectionConfig
 * @property {Number} baseURL  Set the instance baseURL
 * @property {String} timeout  Set a default timeout to the Connection instance
 * @property {Boolean} headers Add additional headers to Connection instance
 * @property {Logger} log      Log requests and responses.
 */

const axios = require("axios").default;
const BaseConnection = require("./BaseConnection");

class AxiosConnection extends BaseConnection {
    /**
     * Creates an instance of Communicator.
     * @memberOf AxiosConnection
     * @param {ConnectionConfig} [config]
     */
    constructor(config = {}) {
        super();

        this.axios = axios.create({
            baseURL: config.baseURL,
            timeout: config.timeout,
            headers: config.headers,
        });

        this.axios.interceptors.request.use(
            (request) => {
                if (config.log && config.log.request) {
                    const req = Object.assign({}, request)
                    if (req.data) req.data = "***";
                    config.log.request(req);
                }
                return request;
            },
            (error) => {
                config.log && config.log.requestError && config.log.requestError(error);
                this.handleRequestError(error);
                return Promise.reject(error);
            }
        );

        this.axios.interceptors.response.use(
            (response) => {
                if (config.log && config.log.response) {
                    const resp = Object.assign({}, response)
                    if (resp.data) resp.data = "***";
                    config.log.response(resp);
                }
                config.log && config.log.response && config.log.response(response);
                return response;
            },
            (error) => {
                config.log && config.log.responseError && config.log.responseError(error);
                this.handleResponseError(error, error.response.status);
                return Promise.reject(error);
            }
        );
    }

    /**
     * Execute an HTTP(s) request
     * @param method "GET", "POST" or "PUT" http method to use
     * @param uri path to request
     * @param headerParams parameters to be sent in http headers
     * @param bodyParam the body to send (javascript Object, converted to Json)
     * @returns On success: a Promise with .data, .status and headers. On error: an AxiosError
     */
    request(method, uri, headerParams, bodyParam) {
        return this.axios.request({
            method: method,
            url: uri,
            headers: headerParams,
            data: bodyParam,
        });
    }
}

module.exports = AxiosConnection;
