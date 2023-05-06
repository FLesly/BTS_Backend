import express from "express";
import { agregarProductos, obtenerProductos, eliminarProducto } from "../controllers/productoController";

const router = express.Router();

router.post("/registroProductos/:id", agregarProductos);
router.get("/", obtenerProductos);
router.delete('/eliminarProducto/:id', eliminarProducto);

export default router;