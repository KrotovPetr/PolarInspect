import { sequelize } from "../../db";
import { Point } from "./Point";
import { Pipe } from "./Pipe";

const PipePoint = sequelize.define(
  "pipes_points",
  {},
  {
    timestamps: false,
  }
);

Point.belongsToMany(Pipe, { through: PipePoint });
Pipe.belongsToMany(Point, { through: PipePoint });
