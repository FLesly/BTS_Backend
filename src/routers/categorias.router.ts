import express from "express";
import { getCategorias, agregarCategoria, getCategoriaPorId, eliminarCategoria} from "../controllers/categorias.controller";

const router = express.Router();

router.get("/", getCategorias);
router.post("/registroCategorias", agregarCategoria);
router.get("/:id", getCategoriaPorId);
router.delete("/eliminarCategoria/:id", eliminarCategoria);


export default router;