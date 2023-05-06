import express from "express";
import { agregarRepartidor, obtenerRepartidores, eliminarRepartidor, actualizarRepartidor } from "../controllers/repartidorController";

const router = express.Router();

// Ruta para agregar un nuevo repartidor
router.post("/registroRepartidores", agregarRepartidor);
router.get("/", obtenerRepartidores);
router.delete("/eliminarRepartidor/:id", eliminarRepartidor);
router.put("/actualizarRepartidor", actualizarRepartidor);

export default router;
