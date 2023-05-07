import express from "express";
import { addOrdenes, getOrden, getOrdenes, putOrden } from "../controllers/ordenes.controller";

const router = express.Router();

router.post("/add", addOrdenes);
router.get("/", getOrdenes);
router.get("/:id", getOrden);
router.put("/:id/estadoOrden", putOrden);
export default router;