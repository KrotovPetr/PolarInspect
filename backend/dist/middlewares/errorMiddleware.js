"use strict";
exports.__esModule = true;
exports.errorMiddlewareFunction = void 0;
var apiError_1 = require("../exceptions/apiError");
function errorMiddlewareFunction(err, req, res, next) {
    console.log(err);
    if (err instanceof apiError_1.ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Непредвиденная ошибка' });
}
exports.errorMiddlewareFunction = errorMiddlewareFunction;
