import express, {type Request,type Response} from 'express';
import * as personalServices from '../services/personalServices.js';
// Configuramos/Activamos las rutas
const router = express.Router();
//https://localhost:3001/api/personal
router.get("/", async (_req:Request,res:Response) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
})

//https://localhost:3001/api/personal/1
router.get('/:id', async(req:Request,res:Response) => {  
    let idPersona = Number(req.params.id);
    let personal = await personalServices.encuentraPersonal(idPersona);
    res.send(personal);
    });

    //Agregar una persona nueva
    router.post('/', async (req:Request,res:Response) => {
        try {
            const {nombre,direccion,telefono,estatus} = req.body; 
            const nuevo = await personalServices.agregarPersonal({nombre,direccion,telefono,estatus}
        );
        res.send(nuevo);

        } catch (error) {
             res.status(400).send({error: "Error en los datos enviados"});
        }    
    });
export default router;