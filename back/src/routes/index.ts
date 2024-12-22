import { Router } from "express";
import usersRouter from "./auth.router";

const router = Router();

router.use("/auth", usersRouter);

export default router;
