import express from "express";
import { addOrdenes } from "../controllers/ordenes.controller";

const router = express.Router();

router.post("/add", addOrdenes);

export default router;