import express from "express";
import { addOrdenes, getOrdenes } from "../controllers/ordenes.controller";

const router = express.Router();

router.post("/add", addOrdenes);
router.get("/", getOrdenes);

export default router;