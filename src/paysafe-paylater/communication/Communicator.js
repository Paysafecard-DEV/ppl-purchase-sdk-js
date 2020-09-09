/**
 * @class Communicator
 */
class Communicator {
    /**
     *Creates an instance of Communicator.
     * @memberof Communicator
     * @param connection
     */
    constructor(connection) {
        if (!connection) {
            throw new Error("Instance of a connection must be provided");
        }

        if (!(connection.request instanceof Function)) {
            throw new Error("Connection instance must have 'request' method");
        }

        this.connection = connection;
    }

    /**
     * Execute without an AuthorizationHeader
     * @param method "GET", "POST" or "PUT" http method to use
     * @param uri path to request
     * @param headerParams parameters to be sent in http headers
     * @param bodyParam the body to send (javascript Object, converted to Json)
     * @returns On success: a Promise with .data, .status and .headers. On error: an AxiosError
     */
    execute(method, uri, headerParams, bodyParam) {
        return this.connection.request(method, uri, headerParams, bodyParam).then(({ data, status, headers }) => ({
            data,
            status,
            headers,
        }));
    }
}

module.exports = Communicator;
