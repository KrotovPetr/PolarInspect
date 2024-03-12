"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.pipeRouter = void 0;
var express_1 = __importDefault(require("express"));
var pipeController_1 = __importDefault(require("../controllers/pipeController"));
exports.pipeRouter = (0, express_1["default"])();
exports.pipeRouter.get("/", pipeController_1["default"].getAllPipes);
