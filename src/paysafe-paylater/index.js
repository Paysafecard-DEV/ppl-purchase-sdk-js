exports.Communicator = require("./communication/Communicator");

exports.AxiosConnection = require("./connection/AxiosConnection");
exports.BaseConnection = require("./connection/BaseConnection");

exports.PurchaseLifecycleApi = require("./api/PurchaseLifecycleApi");
exports.PurchaseAuthorizationApi = require("./api/PurchaseAuthorizationApi");
exports.LegalDocumentsApi = require("./api/LegalDocumentsApi");

exports.exceptions = {
    ApiException: require("./exceptions/ApiException"),
    AuthorizationException: require("./exceptions/AuthorizationException"),
    PaysafeException: require("./exceptions/PaysafeException"),
    ReferenceException: require("./exceptions/ReferenceException"),
    ValidationException: require("./exceptions/ValidationException"),
}

exports.models = {
    Account: require("./model/Account"),
    Ach: require("./model/Ach"),
    AchAccountType: require("./model/AchAccountType"),
    Address: require("./model/Address"),
    Amount: require("./model/Amount"),
    AuthorizePurchaseRequest: require("./model/AuthorizePurchaseRequest"),
    Bacs: require("./model/Bacs"),
    Company: require("./model/Company"),
    Consumer: require("./model/Consumer"),
    ConsumerVerification: require("./model/ConsumerVerification"),
    Contract: require("./model/Contract"),
    Country: require("./model/Country"),
    Currency: require("./model/Currency"),
    DeliveryAddress: require("./model/DeliveryAddress"),
    DeliveryInformation: require("./model/DeliveryInformation"),
    DeliveryType: require("./model/DeliveryType"),
    Document: require("./model/Document"),
    DocumentType: require("./model/DocumentType"),
    Eft: require("./model/Eft"),
    Language: require("./model/Language"),
    LogisticsProvider: require("./model/LogisticsProvider"),
    MerchantReference: require("./model/MerchantReference"),
    MethodType: require("./model/MethodType"),
    Occupation: require("./model/Occupation"),
    OperationInformation: require("./model/OperationInformation"),
    OperationResult: require("./model/OperationResult"),
    OperationStatus: require("./model/OperationStatus"),
    Payment: require("./model/Payment"),
    PaymentInformation: require("./model/PaymentInformation"),
    PaymentMethod: require("./model/PaymentMethod"),
    PaymentOption: require("./model/PaymentOption"),
    Person: require("./model/Person"),
    ProductType: require("./model/ProductType"),
    PurchaseInformation: require("./model/PurchaseInformation"),
    PurchaseOperationResponse: require("./model/PurchaseOperationResponse"),
    PurchaseState: require("./model/PurchaseState"),
    Sepa: require("./model/Sepa"),
};

exports.logging = {
    Logger: require("./logging/Logger"),
    ConsoleLogger: require("./logging/ConsoleLogger"),
};
