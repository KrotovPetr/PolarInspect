"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var pointsRoutes_1 = require("./pointsRoutes");
var pipeRoutes_1 = require("./pipeRoutes");
var router = (0, express_1["default"])();
router.use("/points", pointsRoutes_1.pointRouter);
router.use("/pipes", pipeRoutes_1.pipeRouter);
exports["default"] = router;
