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

//clousures
const variablefuncion = function(){
    return "¡Hola!";
}
console.log(variablefuncion());

const saludo = "iHola";
function externa() {
const persona = ' Martin ';
        function interna() {
        const fin = 'Nevarez!'
        return saludo+persona+fin;
        }
    return interna;
}
console.log(externa()());
const clousure = externa();
console.log(clousure());

//Otro ejemplo
const miContador = function(){
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
}
console.log(miContador());
console.log(miContador());