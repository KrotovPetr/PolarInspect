import { Model } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { sequelize } from "../../db";
import { IPipe } from "../types/Pipe";

export const Pipe = sequelize.define<Model<IPipe>>(
  "pipes",
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
  },
  {
    timestamps: false,
    tableName: "pipes",
  }
);
