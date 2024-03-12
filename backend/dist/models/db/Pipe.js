"use strict";
exports.__esModule = true;
exports.Pipe = void 0;
var sequelize_1 = require("sequelize");
var db_1 = require("../../db");
exports.Pipe = db_1.sequelize.define("pipes", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "pipes"
});
