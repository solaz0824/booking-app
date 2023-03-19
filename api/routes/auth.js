import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("Hello, this it auth endpoint");
});

export default authRouter;
