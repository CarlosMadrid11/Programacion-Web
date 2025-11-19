import express, {} from 'express';
import * as personalServices from '../services/personalServices.js'; // <- nota la extensión .js
//Activamos las rutas
const router = express.Router();
//http://localhost:3001/api/personal/
router.get('/', async (_req, res) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
});
router.get('/:id', async (req, res) => {
    let personal = await personalServices.encuentraPersonal(Number(req.params.id));
    res.send(personal);
});
router.post('/', async (req, res) => {
    try {
        const { nombre, direccion, telefono, estatus } = req.body;
        const nuevo = await personalServices.agregarPersonal({
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(nuevo);
    }
    catch (e) {
        res.send('No se pudo agregar el personal');
    }
});
//Modificar datos
router.put('/', async (req, res) => {
    try {
        const { id, nombre, direccion, telefono, estatus } = req.body;
        const modificado = await personalServices.modificarPersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(modificado);
    }
    catch (e) {
        res.status(400).send("Error en los datos");
    }
});
//Eliminar o borrar los datos de personal
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.body;
        const eliminado = await personalServices.borrarPersonal(Number(id));
        res.send(eliminado);
    }
    catch (e) {
        res.status(400).send("Error en los datos");
    }
});
export default router;
