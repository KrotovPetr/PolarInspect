"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize("polar", "postgres", "postgres", {
    dialect: "postgres",
    host: "localhost",
    port: 5434,
    models: [__dirname + "/models"],
    logging: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(new Date().toLocaleString() + " — " + msg[0] + "\n");
    }
});
