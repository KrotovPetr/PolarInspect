import Router from "express";
import pointsController from "../controllers/pointsController";

export const pointRouter = Router();
pointRouter.get('/', pointsController.getAllPoints);