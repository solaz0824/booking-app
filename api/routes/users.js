import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("Hello, this is users endpoint");
});

export default usersRouter;
