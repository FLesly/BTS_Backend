import express from "express";
import { addOrdenes, getOrden, getOrdenes } from "../controllers/ordenes.controller";

const router = express.Router();

router.post("/add", addOrdenes);
router.get("/", getOrdenes);
router.get("/:id", getOrden);
export default router;