import * as clienteService from "../services/ClienteService.js";

// Controlador para el método GET
export const getClientes = (req, res) => {

    try {

        console.log("¡Controlador: Han solicitado la lista de clientes!");

        // Llamamos al servicio para que nos dé los datos
        const clientes = clienteService.obtenerTodosLosClientes();

        res.status(200).json({
            mensaje: "Lista de clientes recuperada con éxito",
            total: clientes.length,
            datos: clientes
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error en el servidor al obtener los clientes"
        });

    }

};

// Controlador para el método POST
export const createCliente = (req, res) => {

    try {

        console.log("¡Controlador: Recibida petición de creación de cliente!");

        // Validamos que vengan los datos obligatorios
        if (!req.body.documento || !req.body.nombre || !req.body.telefono) {

            return res.status(400).json({
                mensaje: "Error de validación: 'documento', 'nombre' y 'telefono' son requeridos."
            });

        }

        // Llamamos al servicio para que cree el registro
        const nuevoCliente = clienteService.crearCliente(req.body);

        res.status(201).json({
            mensaje: "Cliente registrado correctamente en el sistema",
            clienteCreado: nuevoCliente
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error en el servidor al registrar el cliente"
        });

    }

};