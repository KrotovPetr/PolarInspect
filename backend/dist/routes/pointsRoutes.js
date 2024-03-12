"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.pointRouter = void 0;
var express_1 = __importDefault(require("express"));
var pointsController_1 = __importDefault(require("../controllers/pointsController"));
exports.pointRouter = (0, express_1["default"])();
exports.pointRouter.get('/', pointsController_1["default"].getAllPoints);
