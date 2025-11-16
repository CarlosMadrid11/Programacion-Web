import mysql from 'mysql2/promise';
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
