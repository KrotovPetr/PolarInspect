import Router from "express";
import pipeController from "../controllers/pipeController";

export const pipeRouter = Router();
pipeRouter.get("/", pipeController.getAllPipes);
