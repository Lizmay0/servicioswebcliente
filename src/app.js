import express from "express";
import clienteRoutes from "./routes/ClienteRoutes.js";

const app = express();

// Middleware traductor de JSON
app.use(express.json());

// Registro de las rutas (Los endpoints ahora tendrán el prefijo /api/clientes)
app.use("/api/clientes", clienteRoutes);

export default app;
