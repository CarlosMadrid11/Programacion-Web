import { z } from 'zod';
//Validaciones con zod - construimos el esquema
export const personalSchema = z.object({
    nombre: z.string().min(2, "Minimo 2 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2, "Minimo 2 caracteres").max(300, "Maximo 300 caracteres"),
    telefono: z.string().min(10, "Minimo 10 caracteres").max(15, "Maximo 15 caracteres"),
    estatus: z.number('Solo numeros').int().positive().min(1).max(2)
});
