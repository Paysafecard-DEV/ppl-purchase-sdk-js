
function populateUri(uri, key, value) {
    return uri.replace("{" + key + "}", value);
}

module.exports = { populateUri };
