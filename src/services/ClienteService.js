// Base de datos temporal en memoria (Simulación)
let clientes = [
    {
        id: 1,
        documento: "1098765432",
        nombre: "Juan Pérez",
        telefono: "3001234567"
    },
    {
        id: 2,
        documento: "1023456789",
        nombre: "María Gómez",
        telefono: "3109876543"
    }
];

// Servicio: Obtener todos los clientes
export const obtenerTodosLosClientes = () => {
    return clientes;
};

// Servicio: Crear un nuevo cliente
export const crearCliente = (datosCliente) => {

    const nuevoCliente = {
        id: clientes.length + 1,
        documento: datosCliente.documento,
        nombre: datosCliente.nombre,
        telefono: datosCliente.telefono
    };

    clientes.push(nuevoCliente);

    return nuevoCliente;
};
