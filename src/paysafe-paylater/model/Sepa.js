/**
 * Purchase API
 * @copyright Copyright (c) 2020 Paysafe Pay Later
 * @license see LICENSE.TXT
 *
 * This class is based on the Paysafe Pay Later OpenAPI specification, version 1.0.0.
 */

const ModelHelper = require("../util/ModelHelper");

class Sepa {
    /**
     * @returns { String }
     */
    getIban() {
        return this.iban;
    }
    /**
     * @param { String } iban
     */
    setIban(iban) {
        this.iban = ModelHelper.validatePrimitive(iban, "string");
    }
    /**
     * @param { String } val
     */
    withIban(val) {
        this.setIban(val);
        return this;
    }

    /**
     * @returns { String }
     */
    getBic() {
        return this.bic;
    }
    /**
     * @param { String } bic
     */
    setBic(bic) {
        this.bic = ModelHelper.validatePrimitive(bic, "string");
    }
    /**
     * @param { String } val
     */
    withBic(val) {
        this.setBic(val);
        return this;
    }

    /**
     * @returns { Sepa }
     */
    static constructFromObject(data) {
        if (!data) return undefined;
        return new Sepa().withIban(ModelHelper.convertToType(data["iban"], String)).withBic(ModelHelper.convertToType(data["bic"], String));
    }
}

module.exports = Sepa;
