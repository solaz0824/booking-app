import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", createHotel);
//UPDATE
hotelsRouter.put("/:id", updateHotel);
//DELETE
hotelsRouter.delete("/:id", deleteHotel);
//GET
hotelsRouter.get("/:id", getHotel);
//GET ALL
hotelsRouter.get("/", getHotels);

export default hotelsRouter;
