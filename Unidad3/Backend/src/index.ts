// API --- BACKEND
// NODEJS = EXPRESS

import express from 'express';

// Creamos la aplicacion a traves del paquete express
// y llamamos a su constructor
const app = express();
// Todo lo que devuelve al usuario es en formato JSON
app.use(express.json());

// puerto para escucahar las peticiones del frontend
const PUERTO = 3001;

// RUTA
app.get('/hola', (_req, res) =>{
    let fecha = new Date().toLocaleDateString();
    res.send('mundo con la fecha '+fecha);
})


// encendemos el servidor y lo ponemos en modo escucha
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
    }
);
