let numeros: number;
numeros = 101;
console.log("El numero es: " + numeros);
let arreglonumeros: number[];
arreglonumeros = [1,2,3,4,5,6];
let arreglostrings: string[];
arreglostrings = ["Hola","que","tal"];
let desiciones: boolean;
desiciones = true;
let arreglodesiciones: boolean[];
arreglodesiciones = [true, false, true, true];

function info(a:number, b:string, c:boolean, d?:number):void {
    console.log(a+" "+b+" "+c+" "+(d == undefined ? "-" : d));
}   
info(1, "Hola", true,10);
enum TiposUsuarios{
    Administrador,
    Moderador, 
    Invitado
}
type Usuario = {
    nombre: string, tipo: TiposUsuarios, edad: boolean
};
type UsuarioRedes = Usuario & {
    ip: string
}
function usuarios(usuario: UsuarioRedes):void{
    console.log("Nombre: "+usuario.nombre+" Tipo: "+usuario.tipo+" Edad: "+usuario.edad+" con la ip: "+usuario.ip);  
}
console.log(usuarios({nombre:"Carlos", tipo:TiposUsuarios.Moderador, edad:true, ip:"192.168.4.1"})); 