import { Router } from "express";
import { getClientes, createCliente } from "../controllers/ClienteController.js";

const router = Router();

// Definimos los endpoints apuntando a sus controladores correspondientes

router.get("/", getClientes);

router.post("/", createCliente);

export default router;
