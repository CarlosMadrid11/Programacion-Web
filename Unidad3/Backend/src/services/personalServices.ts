import mysql from 'mysql2/promise';
import { type PersonalNuevo } from '../typesPersonal.js';

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Api_Proweb'
});

export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal');
        return results;
    } catch (error) {
        return {error: "No se puede obtener la lista del personal"}
    }
}

export const encuentraPersonal = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal where id = ? LIMIT 1 ', [id]);
        return results;
    } catch (error) {
        return {error: "No se puede obtener la personal"}
    }
}

export const agregarPersonal = async (nuevo:PersonalNuevo) =>{
    try {
        const [results] = await conexion.query('INSERT INTO personal (nombre,direccion,telefono,estatus) VALUES (?,?,?,?)', [nuevo.nombre,nuevo.direccion,nuevo.telefono,nuevo.estatus]);
        return results;
    } catch (error) {
        return {error: "No se puede agregar el personal"}
    }

}