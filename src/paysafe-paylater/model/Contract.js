/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");
const DocumentType = require("./DocumentType");

class Contract {
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
     * @returns { DocumentType }
     */
    getType() {
        return this.type;
    }
    /**
     * @param { DocumentType } type
     */
    setType(type) {
        this.type = ModelHelper.validateEnum(type, DocumentType, "DocumentType");
    }
    /**
     * @param { DocumentType } val
     */
    withType(val) {
        this.setType(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getId() {
        return this.id;
    }
    /**
     * @param { String } id
     */
    setId(id) {
        this.id = ModelHelper.validatePrimitive(id, "string");
    }
    /**
     * @param { String } val
     */
    withId(val) {
        this.setId(val);
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
     * @returns { Contract }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Contract()
            .withName(ModelHelper.convertToType(data["name"], String))
            .withType(ModelHelper.convertToType(data["type"], DocumentType))
            .withId(ModelHelper.convertToType(data["id"], String))
            .withUrl(ModelHelper.convertToType(data["url"], String));
    }
}

module.exports = Contract;
