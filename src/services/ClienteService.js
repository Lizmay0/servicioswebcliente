import pool from "../config/db.js";

// Método GET para obtener todos los clientes
export const obtenerTodosLosClientes = async () => {

    try {

        const [rows] = await pool.query("SELECT * FROM clientes");

        return rows;

    } catch (error) {

        throw new Error(
            "Error al obtener los clientes de la base de datos: " +
            error.message
        );

    }

};

// Método POST para crear un nuevo cliente
export const crearCliente = async (datosCliente) => {

    const { documento, nombre, telefono } = datosCliente;

    try {

        const [result] = await pool.query(
            "INSERT INTO clientes (documento, nombre, telefono) VALUES (?, ?, ?)",
            [documento, nombre, telefono]
        );

        // Retornamos el registro recién creado
        return {
            id: result.insertId,
            documento,
            nombre,
            telefono
        };

    } catch (error) {

        throw new Error(
            "Error al guardar el cliente: " +
            error.message
        );

    }

};
