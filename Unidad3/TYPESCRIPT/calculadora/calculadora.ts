const operaciones = ('suma','resta','multiplicar°','dividir');

const calculadora = (a:number,b:number,operacion:string,) => {
    if(operacion === "sumar"){
        return a + b;
    }
    if(operacion === "restar"){
        return a - b;
    }
    if(operacion === "multiplicar"){
        return a * b;
    }
    if(operacion === "dividir"){
        if(b === 0){
            return "No se puede dividir entre cero"
        }
        return a / b;
    }
    return "Operación no válida";
}

console.log(calculadora(1,3,'suma'));
console.log(calculadora(1,3,'resta'));
console.log(calculadora(1,3,'multiplicar'));
console.log(calculadora(1,3,'dividir'));