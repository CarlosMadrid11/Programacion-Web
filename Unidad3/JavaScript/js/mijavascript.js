// document.write("<h1>Programacion web</h1>");
// console.log("Hacia la consola");
// // console.error("Lanza un error");
// let x = 1;//débilmente tipado
// console.log(x);
// console.log(typeof(x));
// // tipos de datos
// /*
//     Undefined
//     Boolean
//     Number
//     String
//     BigInt
//     Symbol
//     Null
//     Object
//     Functtion
// */
// let esPW = true
// if(esPW){
//     console.log("estamos en clase")
// }else{
//     console.log("no estamos en clase")
// }
// let numero = -321334.4343;
// console.log(numero);
// // Cadenas Strings
// let cadena="una cadena"
// let cadena2='una cadena'
// let cadena3=`una cadena 
// con más de una linea y puedo
// agregar interpolacion de 
// variables, ejemplo: numero ${numero}`
// console.log(cadena3);

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1);
// let usuario={nombre:"Carlos",[id1]: 21};
// console.log(`${usuario.nombre} ${usuario[id1]}`);
// let variablesnulas = null;
// console.log(variablesnulas);

// const PI = 3.1416;
// console.log(PI);

// //Arreglos
// let arreglo = [];
// console.log(arreglo);
// arreglo = [1,2,3]
// console.log(arreglo);
// arreglo.push(4);
// console.log(arreglo);
// arreglo.pop();
// console.log(arreglo);
// //Sacar el primer elemento del arreglo
// arreglo.shift();
// console.log(arreglo);
// //Agregar un elemento a la primera posicion
// arreglo.unshift(10);
// console.log(arreglo);

// let objeto={nombre:"Carlos",[id1]: 21};
// console.log(Object.keys(objeto));
// console.log(Object.values(objeto));
// console.log(Object.entries(objeto));

let variable = "valor";
const constante = "VALOR"
function miFuncion(a = 2){//le asignas un valor por defecto
    return 2*a;
}
console.log(miFuncion(6));

const functionFlecha = (a = 4) => {
    return 2*a;
}
console.log(functionFlecha(10));

// Destructuring - destrucurar
// Objetos
const usuarios = {
    nombre: "Carlos",
    apellido: "Madrid"
}
// let nombre=usuarios.nombre;
// let apellido=usuarios.apellido;
const { nombre, apellido } = usuarios;
console.log("Actualizado nombre "+nombre+" "+apellido);
// Otro objeto
const usuario2 = {
    nombre: "Carlos",
    apellido: "Madrid",
    redes: {
            sociales: {
                twx: "@miusuario",
                face: "@miface"
            }
    }
}
// const face = usuario2.redes.sociales.face;
const { twx,face } = usuario2.redes.sociales;
console.log(twx+" "+face);


//Arreglos
const arregloNombres=['Juan','Ernesto','Omar'];
// let nombre1 = arregloNombres[0];
// let nombre3 = arregloNombres[2];
const [nombre1,,nombre3] = arregloNombres; // Como no queremos cachar el nombre 2 del arreglo ponemos ,, 
console.log(nombre1+" "+nombre3);

//Combinaciones 
// Objetos

const usuarios3 = {
    direccion: "conocida",
    numerocasa: "300"
}
// Propagacion de objetos
const NuevoObjeto = {...usuario2,...usuarios3};
console.log(NuevoObjeto);

//Arreglos
const ArregloApellidos = ['Perez','Lopez','Gomez'];
const NuevoArreglo = [...arregloNombres,...ArregloApellidos]; // con propagacion
console.log(NuevoArreglo);
const OtroNuevoArreglo = arregloNombres.concat(ArregloApellidos); // con concatenacion
console.log(OtroNuevoArreglo);


//foreach, for, map, reduce <--- iterar arreglos
for(let i=0;i<NuevoArreglo.length;i++){
    console.log(NuevoArreglo[i])
}NuevoArreglo.forEach(function(nombre) {
    console.log(nombre)
})
let numeros = [1,2,3,4,5];
let suma = 0;
numeros.forEach(function(numero) {
    suma += numero;
})
console.log(suma);


//Map
let precios=[10,20,30,40,50];
const conversion = 0.85;
let preciosnuevos=precios.map(function(precio){
return precio * conversion;
});

console.log(preciosnuevos);
//Reduce
let sumaPrecios = precios.reduce(function(suma){
    return suma *= precios;
},0);
console.log(sumaPrecios);
 
//Clases
class Animal{
constructor(nombre){
this.nombre = nombre;
    }
    habla(){
            console.log('Este ${this.nombre} hace ruido');
        }
    }
class Perro extends Animal{
    habla(){
    console.log(`Mi perro ${this.nombre} ladra`);
    }
}
const perro = new Perro('Hunter');
perro.habla();

// Clase viernes
//clousures
/*const variabl efuncion = function(){
    return "¡Hola!";
}
console.log(variablefuncion());

const saludo = "iHola";
function externa() {
const persona = ' Carlos ';
        function interna() {
        const fin = 'Madrid!'
        return saludo+persona+fin;
        }
    return interna;
}
console.log(externa()());
const clousure = externa();
console.log(clousure());

//Otro ejemplo
const miContador = (function(){
    let contador = 0;
    function incrementar(){
        return ++contador;
    }
     function decremenar(){
        return --contador;
    }
     function valor(){
        return contador;
    }
    return{
        incrementar,
        decremenar, 
        valor
    }
})() // <--- ejecutar la funcion principal
console.log(miContador());
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decremenar();
console.log(miContado.valor());

//Promesas
//Paginas dinamicas <acceso a datos (internos, externos)
//Kb <---externas, internas ---> MB o GB

let datos = [
    {
    id: 1,
    materia:'PW',
    semestre: 6
    },
    {
    id: 2,
    materia:'POO',
    semestre: 1
    },
    {
    id: 3,
    materia:'Estructura de datos',
    semestre: 2
    },
]
// console.log(datos);
const obtenerDatos = () => {
    return new Promise ((resolve, reject) => {
        if(datos.length === 0){
            reject(new Error("Datos está vacío"));
        }
        setTimeout(() => {
        resolve(datos);
    }, 1500); 
    })
    
}
console.log(obtenerDatos());
*/
