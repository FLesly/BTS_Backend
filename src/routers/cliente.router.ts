import express from "express";
import { getCliente, getClientes, postCliente } from "../controllers/cliente.contoller";

const router = express.Router();

router.post("/add", postCliente);
router.get("/:id", getCliente);
router.get("/", getClientes);

export default router;