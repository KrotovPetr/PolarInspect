import { Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { sequelize } from "../../db";
import { IPoint } from "../types/Point";

export const Point = sequelize.define<Model<IPoint>>(
  "points",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    width: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "points",
  }
);
