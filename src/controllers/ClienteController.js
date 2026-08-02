import * as clienteService from "../services/ClienteService.js";

// Controlador para el método GET
export const getClientes = async (req, res) => {

    try {

        const clientes = await clienteService.obtenerTodosLosClientes();

        res.json(clientes);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

// Controlador para el método POST
export const createCliente = async (req, res) => {

    try {

        const nuevoCliente = await clienteService.crearCliente(req.body);

        res.status(201).json(nuevoCliente);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

