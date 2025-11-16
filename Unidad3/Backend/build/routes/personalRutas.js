import express, {} from 'express';
// ...existing code...
import * as personalServices from '../services/personalServices.js'; // <- nota la extensión .js
//Activamos las rutas
const router = express.Router();
//http://localhost:3001/api/personal/
router.get('/', (_req, _res) => {
});
export default router;
