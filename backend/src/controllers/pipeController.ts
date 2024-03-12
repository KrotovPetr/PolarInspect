import express from "express";
import { Pipe } from "../models/db/Pipe";

class PipeController {
  async getAllPipes(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const pipes = await Pipe.findAll();
      return res.status(200).json(pipes);
    } catch (e) {
      next(e);
    }
  }
}

export default new PipeController();
