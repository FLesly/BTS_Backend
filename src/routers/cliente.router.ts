import express from "express";
import { addOrdenACliente, getCliente, getClientes, postCliente } from "../controllers/cliente.contoller";

const router = express.Router();

router.post("/add", postCliente);
router.get("/:id", getCliente);
router.get("/", getClientes);
router.put("/:id/productos", addOrdenACliente)

export default router;