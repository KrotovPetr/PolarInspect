"use strict";
exports.__esModule = true;
var db_1 = require("../../db");
var Point_1 = require("./Point");
var Pipe_1 = require("./Pipe");
var PipePoint = db_1.sequelize.define("pipes_points", {}, {
    timestamps: false
});
Point_1.Point.belongsToMany(Pipe_1.Pipe, { through: PipePoint });
Pipe_1.Pipe.belongsToMany(Point_1.Point, { through: PipePoint });
