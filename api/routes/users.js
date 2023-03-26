import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();

// usersRouter.get("/check-auth", verifyToken, (req, res, next) => {
//   res.send("hello, you are logged in!");
// });

// usersRouter.get("/check-user/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// usersRouter.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

usersRouter.get("/:id", verifyUser, getUser);
usersRouter.get("/", verifyAdmin, getUsers);
usersRouter.put("/:id", verifyUser, updateUser);
usersRouter.delete("/:id", verifyUser, deleteUser);

export default usersRouter;
