import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);
//UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);
//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);
//GET
hotelsRouter.get("/:id", getHotel);
//GET ALL
hotelsRouter.get("/", getHotels);

export default hotelsRouter;
