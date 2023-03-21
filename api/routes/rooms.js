import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/", createRoom);
//UPDATE
roomsRouter.put("/:id", updateRoom);
//DELETE
roomsRouter.delete("/:id", deleteRoom);
//GET
roomsRouter.get("/:id", getRoom);
//GET ALL
roomsRouter.get("/", getRooms);

export default roomsRouter;
