let numeros:number = 0;
numeros = 102;
let arreglosnumeros: number[] = [1,2,3,4];
arreglosnumeros = [1,2,3,4,5,6];
let arreglosstrings: string[];
arreglosstrings = ['cadena','otracadena','algo'];
let decisiones: boolean;
decisiones = false;
let arreglosbooleanos: boolean[];
arreglosbooleanos = [true, false, false];
function info(a:number,b:string,c:boolean,d?:number):void{
    console.log(a+" "+b+" "+c+" "+(d == undefined ? '-' : d));
}
info(1,'cadena',false,100);

enum TipoUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario = {
    nombre:string,tipo:TipoUsuario,autoriza:boolean
}
type UsuarioRedes = Usuario & { //extendiendo el tipo
    ip?:string;
}
function usuarios(usuario: UsuarioRedes):void{
    console.log(usuario.nombre+" "+usuario.tipo+" "+usuario.autoriza);
}
usuarios({nombre:'Martin',tipo:TipoUsuario.Administrador,autoriza:true});
usuarios({nombre:'Leonardo',
          tipo:TipoUsuario.Moderador,
          autoriza:true,
          ip:'192.168.1.4'});

//Tipos que solo existen en TS
let tiempo:number = 76_000_000;
let animal:string = "dinosaurio";
let exitinto: boolean = true;


// enum Talla {Chica = 10,Mediana,Grande, Extragrande}
enum Talla {Chica = 's' ,Mediana = 'm',Grande = 'l',Extragrande = 'xl'}
const tallaGrande = Talla. Grande;
console.log("Talla: "+tallaGrande);
//Ponemos const para ocultar la enum del JS
const enum EstadoCargaPagina {Sininiciar, Cargando, Exito, Error}
const estado = EstadoCargaPagina.Exito


//Objeto
const objeto:{
readonly id:number,
nombre:string
} = { id:1,nombre:'' }
// objeto.id = 50
objeto.nombre = 'PW';
//? opcional
const objeto2:{id:number,nombre?:string} = {id: 1}
objeto2.nombre = "PW"


const objeto3:{id:number,nombre:string, talla: Talla} = {id:1,nombre: 'PW',talla: Talla. Mediana}
type Persona = {
id:number,
nombre:string,
talla: Talla
}
const objeto4:Persona = { id: 1, nombre:'PW', talla: Talla.Extragrande}

type Direccion = {
     numero:number,
     calle:string,
     pais:string
}

type Persona2 = {
    id:number,
    nombre:string,
    talla: Talla,
    domicilio: Direccion
}
 
const objeto5:Persona2 = { 
    id: 1, 
    nombre:'PW', 
    talla: Talla.Chica,
    domicilio: 
    {numero: 1,
         calle: "conocida",
         pais: "México"
    } 
}

// Tipado de funciones
function func(){}

const fn1 = (y:number):number => {
    let x = 2;
    if(x > 5){
        return y;
    }
    return 4;
}

const fn2: () => number = () => {
     let x = 2;
    if(x > 5){
        return 6;
    }
    return 4;
}

const fn3: (a:number) => string = (edad:number) => {
    if(edad > 18){
        return "Mayor de edad";
    }
    return "Menor de edad";
}

// El tipo never se usa cuando queremos devolver un error
function error(mensaje:string): never {
    throw new Error("Error: "+mensaje);
}