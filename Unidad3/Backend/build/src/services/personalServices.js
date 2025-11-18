import mysql from 'mysql2/promise';
import { personalSchema } from '../schema/personal.schema.js';
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PW_JCQM'
});
export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal');
        return results;
    }
    catch (error) {
        return { error: "No se puede obtener la lista del personal" };
    }
};
export const encuentraPersonal = async (id) => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal where id = ? LIMIT 1 ', [id]);
        return results;
    }
    catch (error) {
        return { error: "No se puede obtener la personal" };
    }
};
export const agregarPersonal = async (nuevo) => {
    try {
        const validacion = personalSchema.safeParse(nuevo);
        if (!validacion.success) {
            return { error: validacion.error };
        }
        const [results] = await conexion.query('INSERT INTO personal (nombre,direccion,telefono,estatus) VALUES (?,?,?,?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    }
    catch (error) {
        return { error: "No se puede agregar el personal" };
    }
};
export const modificarPersonal = async (modificado) => {
    try {
        const [results] = await conexion.query('UPDATE personal SET nombre=?, direccion=?, telefono=?, estatus=? WHERE id=?', [modificado.nombre, modificado.direccion, modificado.telefono, modificado.estatus, modificado.id]);
        return results;
    }
    catch (e) {
        return { error: "No se puede modificar el personal" };
    }
};
export const borrarPersonal = async (id) => {
    try {
        const [results] = await conexion.query('DELETE FROM personal WHERE id=?', [id]);
        return results;
    }
    catch (e) {
        return { error: "No se puede eliminar el personal" };
    }
};
