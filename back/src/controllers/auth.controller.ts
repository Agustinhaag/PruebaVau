import { Request, Response } from "express";
import { catchedController } from "../utils/catchedControllers";
import {
  getUsers,
  loginUserService,
  registerUserService,
} from "../services/auth.service";
import { User } from "../entities/User";

export const userRegister = catchedController(
  async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    const newUser = await registerUserService({
      email,
      password,
      username,
    });
    res.status(201).send({ register: true, message: "Usuario creado exitosamente" });
  }
);

export const userLogin = catchedController(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await loginUserService({
      email,
      password,
    });
    res.status(201).send({ token, login: true, message:"Login exitoso" });
  }
);

export const findUsers = catchedController(
  async (req: Request, res: Response) => {
    const users: User[] = await getUsers();
    res.status(200).json(users);
  }
);
