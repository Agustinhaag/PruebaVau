import { Router } from "express";
import {
  validateUserRegister,
  validateUserExists,
} from "../middlewares/userRegister.middleware";
import {
    findUsers,
  userLogin,
  userRegister,
} from "../controllers/auth.controller";
import { validateLogin } from "../middlewares/userLogin.middleware";
import checkLogin from "../middlewares/checkLogin.middleware";


const usersRouter = Router();

usersRouter.post(
  "/signup",
  validateUserRegister,
  validateUserExists,
  userRegister
);

usersRouter.post("/signin", validateLogin, userLogin);

usersRouter.get("/users", checkLogin, findUsers)

export default usersRouter;
