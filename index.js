import app from "./src/app.js";

// Leemos el puerto desde el archivo .env
const PORT = process.env.PORT || 3000;

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {

    console.log(`Servidor de clientes corriendo en http://localhost:${PORT}`);

});
