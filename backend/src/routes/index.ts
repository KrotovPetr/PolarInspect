import Router from "express";
import { pointRouter } from "./pointsRoutes";
import { pipeRouter } from "./pipeRoutes";

const router = Router();

router.use("/points", pointRouter);
router.use("/pipes", pipeRouter);

export default router;
