import { z } from 'zod';
const telefonoRegEx = new RegExp(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/);
// Buscar regex para validaciones complejas 
//Validaciones con zod - construimos el esquema
export const personalSchema = z.object({
    nombre: z.string().min(2, "Minimo 2 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2, "Minimo 2 caracteres").max(300, "Maximo 300 caracteres"),
    // telefono: z.string().min(10,"Minimo 10 caracteres").max(15,"Maximo 15 caracteres"),
    telefono: z.string().regex(telefonoRegEx),
    estatus: z.number('Solo numeros').int().positive().min(1).max(2)
});
