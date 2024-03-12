import express from "express";
import { Point } from "../models/db/Point";

class PointController {
  async getAllPoints(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const points = await Point.findAll();
      return res.status(200).json(points);
    } catch (e) {
      next(e);
    }
  }
}

export default new PointController();
