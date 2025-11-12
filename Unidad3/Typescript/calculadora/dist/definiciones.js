"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = 0;
numeros = 102;
let arreglosnumeros = [1, 2, 3, 4];
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglosstrings;
arreglosstrings = ['cadena', 'otracadena', 'algo'];
let decisiones;
decisiones = false;
let arreglosbooleanos;
arreglosbooleanos = [true, false, false];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? '-' : d));
}
info(1, 'cadena', false, 100);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Moderador"] = 1] = "Moderador";
    TipoUsuario[TipoUsuario["Invitado"] = 2] = "Invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza);
}
usuarios({ nombre: 'Martin', tipo: TipoUsuario.Administrador, autoriza: true });
usuarios({ nombre: 'Leonardo',
    tipo: TipoUsuario.Moderador,
    autoriza: true,
    ip: '192.168.1.4' });
//Tipos que solo existen en TS
let tiempo = 76_000_000;
let animal = "dinosaurio";
let exitinto = true;
// enum Talla {Chica = 10,Mediana,Grande, Extragrande}
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["Extragrande"] = "xl";
})(Talla || (Talla = {}));
const tallaGrande = Talla.Grande;
console.log("Talla: " + tallaGrande);
//Ponemos const para ocultar la enum del JS
var EstadoCargaPagina;
(function (EstadoCargaPagina) {
    EstadoCargaPagina[EstadoCargaPagina["Sininiciar"] = 0] = "Sininiciar";
    EstadoCargaPagina[EstadoCargaPagina["Cargando"] = 1] = "Cargando";
    EstadoCargaPagina[EstadoCargaPagina["Exito"] = 2] = "Exito";
    EstadoCargaPagina[EstadoCargaPagina["Error"] = 3] = "Error";
})(EstadoCargaPagina || (EstadoCargaPagina = {}));
const estado = EstadoCargaPagina.Exito;
//Objeto
const objeto = { id: 1, nombre: '' };
// objeto.id = 50
objeto.nombre = 'PW';
//? opcional
const objeto2 = { id: 1 };
objeto2.nombre = "PW";
const objeto3 = { id: 1, nombre: 'PW', talla: Talla.Mediana };
const objeto4 = { id: 1, nombre: 'PW', talla: Talla.Extragrande };
const objeto5 = {
    id: 1,
    nombre: 'PW',
    talla: Talla.Chica,
    domicilio: { numero: 1,
        calle: "conocida",
        pais: "México"
    }
};
// Tipado de funciones
function func() { }
const fn1 = (y) => {
    let x = 2;
    if (x > 5) {
        return y;
    }
    return 4;
};
const fn2 = () => {
    let x = 2;
    if (x > 5) {
        return 6;
    }
    return 4;
};
const fn3 = (edad) => {
    if (edad > 18) {
        return "Mayor de edad";
    }
    return "Menor de edad";
};
// El tipo never se usa cuando queremos devolver un error
function error(mensaje) {
    throw new Error("Error: " + mensaje);
}
