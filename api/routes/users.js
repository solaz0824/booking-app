import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const usersRouter = express.Router();

usersRouter.get("/check-auth", verifyToken, (req, res, next) => {
  res.send("hello, you are authenticated!");
});

usersRouter.get("/:id", getUser);
usersRouter.get("/", getUsers);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
