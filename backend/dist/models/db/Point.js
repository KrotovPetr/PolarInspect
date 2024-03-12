"use strict";
exports.__esModule = true;
exports.Point = void 0;
var sequelize_1 = require("sequelize");
var db_1 = require("../../db");
exports.Point = db_1.sequelize.define("points", {
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
    },
    width: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    theme: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "points"
});
