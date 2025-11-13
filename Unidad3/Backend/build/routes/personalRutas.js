import express, {} from 'express';
import * as personalServices from '../services/personalServices.js';
// Configuramos/Activamos las rutas
const router = express.Router();
//https://localhost:3001/api/personal
router.get("/", async (_req, res) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
});
export default router;
