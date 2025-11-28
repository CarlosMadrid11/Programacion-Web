<template>
    <section>
        <h3></h3>
        <h3>Personal</h3>
        <div>
            <RouterLink :to="{path: '/personal/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <th>Clave</th> 
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Estatus</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="persona in personal" :key="persona.id">
                <td>{{ persona.id }}</td>
                <td>{{ persona.nombre }}</td>
                <td>{{ persona.direccion }}</td>
                <td>{{ persona.telefono }}</td>
                <td>{{ persona.estatus }}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/editar'}">
                                <i class="fa fa-pencil"></i>
                            </RouterLink>
                        </button>
                            <button type="button" class="btn btn-sm btn-outline-danger">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/borrar'}">
                                <i class="fa fa-trash"></i>
                            </RouterLink>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { usePersonal } from '../controladores/usePersonal';
import path = require('path');
    const { traePersonal,personal } = usePersonal()
    //Una vez que la página se monte(dibuje) en pantalla o
    //cuando se cargue el DOM en pantalla
    onMounted(async () => {
        await traePersonal()
    })
</script>

<style scoped>
    section{
       display: flex; 
       justify-content: space-around;
       margin-bottom: 10px;
       margin-top: 10px;
    }
</style>