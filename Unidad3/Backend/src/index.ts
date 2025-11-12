
import express, { Router } from 'express';

// Creamos la aplicacion a traves del paquete express
// y llamamos a su constructor
const app = express();
// Todo lo que devuelve al usuario es en formato JSON
app.use(express.json());
// Configurar rutas para el acceso a personal
import personalRutas from './routes/personalRutas.js';
// Activar la ruta base de personal 
app.use('/api/personal', personalRutas);

// puerto para escucahar las peticiones del frontend
const PUERTO = 3001;

// encendemos el servidor y lo ponemos en modo escucha
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
    }
);

export default Router;

// extencion para tener los json bonitos: JSON FORMATTER
