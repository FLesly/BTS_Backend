import express from "express";
import { agregarProductos, obtenerProductos, eliminarProducto, putProducto, obtenerProducto } from "../controllers/productoController";

const router = express.Router();

router.post("/registroProductos/:id", agregarProductos);
router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.put("/:id", putProducto);
router.delete('/eliminarProducto/:id', eliminarProducto);

export default router;