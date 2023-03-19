import express from "express";

const hotelsRouter = express.Router();

//CREATE
//UPDATE
//DELETE
//GET
//GET ALL

hotelsRouter.get("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});

export default hotelsRouter;
