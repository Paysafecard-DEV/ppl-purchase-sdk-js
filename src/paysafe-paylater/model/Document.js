/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

class Document {
    /**
     * @returns { String }
     */
    getName() {
        return this.name;
    }
    /**
     * @param { String } name
     */
    setName(name) {
        this.name = ModelHelper.validatePrimitive(name, "string");
    }
    /**
     * @param { String } val
     */
    withName(val) {
        this.setName(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getUrl() {
        return this.url;
    }
    /**
     * @param { String } url
     */
    setUrl(url) {
        this.url = ModelHelper.validatePrimitive(url, "string");
    }
    /**
     * @param { String } val
     */
    withUrl(val) {
        this.setUrl(val);
        return this;
    }

    /**
     * @returns { Document }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Document()
            .withName(ModelHelper.convertToType(data["name"], String))
            .withUrl(ModelHelper.convertToType(data["url"], String));
    }
}

module.exports = Document;
