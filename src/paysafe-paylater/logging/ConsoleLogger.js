const Logger = require("./Logger");

class ConsoleLogger extends Logger {

    static request(req) {
        console.log("Paysafe request: ", req);
    }

    static requestError(err) {
        console.error("Paysafe request error: ", err);
    }
    static response(resp) {
        console.log("Paysafe response: ", resp);
    }
    static responseError(err) {
        console.error("Paysafe response error: ", err);
    }
}

module.exports = ConsoleLogger;