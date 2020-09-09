const ValidationException = require("../exceptions/ValidationException")

const parseArray = function (data, type) {
    // for array type like: ['String']
    const itemType = type[0];

    return data.map((item) => {
        return ModelHelper.convertToType(item, itemType);
    });
};

const parseObject = function (data, type) {
    let keyType, valueType;
    for (const k in type) {
        if (type.hasOwnProperty(k)) {
            keyType = k;
            valueType = type[k];
            break;
        }
    }

    const result = {};
    for (const k in data) {
        if (data.hasOwnProperty(k)) {
            const key = ModelHelper.convertToType(k, keyType);
            result[key] = ModelHelper.convertToType(data[k], valueType);
        }
    }
    return result;
};

const parseDate = function (data) {
    return new Date(data);
};

function validatePrimitiveOrObject(value, valueType) {
    return typeof valueType === "string"
        ? ModelHelper.validatePrimitive(value, valueType)
        : ModelHelper.validateObject(value, valueType);
}

function formatDate(value) {
    const month = `${value.getMonth() + 1}`.padStart(2, "0")
    const day = `${value.getDate()}`.padStart(2, "0")
    return `${value.getFullYear()}-${month}-${day}`;
}

class ModelHelper {
    /**
     * Converts a value to the specified type.
     * @param {(String|Object)} data The data to convert, as a string or object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns An instance of the specified type or null or undefined if data is null or undefined.
     */
    static convertToType(data, type) {
        if (data === null || data === undefined) return data;

        switch (type) {
            case Boolean:
                return Boolean(data);
            case Number:
                return parseFloat(data);
            case String:
                return String(data);
            case Date:
                return parseDate(String(data));
            case Blob:
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type.constructFromObject === "function") {
                    // for models
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    return parseArray(data, type);
                } else if (typeof type === "object") {
                    // for plain object type like: {'String': 'Integer'}
                    return parseObject(data, type);
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    }

    static validatePrimitive(value, typeName) {
        if (!value) return value;
        if (typeof value === typeName || (value.constructor && value.constructor.name === typeName))
            return value;
        throw new ValidationException(`'${value}' (${typeof value}) should be a '${typeName}'.`);
    }

    static validateArray(value, valueType) {
        if (!value) return value;
        if (!Array.isArray(value))
            throw new ValidationException(`'${value}' (${typeof value}) should be an 'Array'.`);
        value.forEach((item) => {
            validatePrimitiveOrObject(item, valueType);
        })
        return value;
    }

    static validateArrayEnum(value, valueType) {
        if (!value) return value;
        if (!Array.isArray(value))
            throw new ValidationException(`'${value}' (${typeof value}) should be an 'Array'.`);
        value.forEach((item) => {
            this.validateEnum(item, valueType);
        })
        return value;
    }

    static validateMap(value, keyType, valueType) {
        if (!value) return value;
        if (typeof value !== "object")
            throw new ValidationException(`'${value}' (${typeof value}) should be a 'Map' or an 'Object'.`);
        Object.keys(value).forEach(function(key) {
            validatePrimitiveOrObject(key, keyType);
            validatePrimitiveOrObject(value[key], valueType);
        });
        return value
    }

    static validateEnum(value, enumType, enumTypeName) {
        if (!value) return value;
        if (enumType.hasOwnProperty(value))
            return value
        throw new ValidationException(`'${value}' (${typeof value}) should match a value defined in '${enumTypeName}'.`);
    }

    static validateObject(value, objectType) {
        if (!value) return value;
        if (value instanceof objectType)
            return value;
        if (value instanceof Object && objectType && typeof objectType.constructFromObject === "function")
            return objectType.constructFromObject(value);
        throw new ValidationException(`'${value}' (${typeof value}) should be of type '${objectType}'.`);
    }

    static validateDate(value) {
        if (!value) return value;
        if (value instanceof Date)
            return formatDate(value);
        if (typeof value === "string") {
            const date = new Date(value);
            if (!isNaN(date))
                return formatDate(date);
        }
        throw new ValidationException(`'${value}' (${typeof value}) should be of type 'Date'.`);
    }

    static validateDateTime(value) {
        if (!value) return value;
        if (value instanceof Date)
            return value.toISOString();
        if (typeof value === "string") {
            value = new Date(value);
            if (!isNaN(value))
                return value.toISOString();
        }
        throw new ValidationException(`'${value}' (${typeof value}) should be of type 'Date'.`);
    }
}

module.exports = ModelHelper;
