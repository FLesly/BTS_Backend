import express from "express";
import { getCategorias, agregarCategoria, getCategoriaPorId } from "../controllers/categorias.controller";

const router = express.Router();

router.get("/", getCategorias);
router.post("/registroCategorias", agregarCategoria);
router.get("/:id", getCategoriaPorId);

export default router;