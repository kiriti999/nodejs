// class BaseError extends Error {
//     name;
//     httpCode;
//     isOperational;

//     constructor(name, httpCode, description, isOperational) {
//         super(description);
//         Object.setPrototypeOf(this, new.target.prototype);

//         this.name = name;
//         this.httpCode = httpCode;
//         this.isOperational = isOperational;

//         Error.captureStackTrace(this);
//     }
// }

// //free to extend the BaseError
// class APIError extends BaseError {
//     constructor(name, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
//         super(name, httpCode, isOperational, description);
//     }
// }

/**
 * A custom APIError
 * @param {String} message a message to store in error
 * @constructor
 */
function APIError(message, httpCode) {
    this.constructor.prototype.__proto__ = Error.prototype;
    // properly capture stack trace in Node.js
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.status = httpCode;
    this.message = message;
}

module.exports = APIError;
