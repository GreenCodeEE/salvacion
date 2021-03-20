// costo de envío si es mayor que 339
const prompt = require('prompt-sync')();
function calculaCosto(costo, nombre){
    var resultado = 0;
    console.log("Factura: ");
    if (costo >= 399){
        resultado = parseInt(costo) + 100;
        console.log("El costo de envío de" + nombre + "es: 100");
        console.log("El total a pagar es: " + resultado); 
    }
    else{
        resultado = costo;
        console.log("El total a pagar es: " + resultado);
    }
}
var nombre = prompt("¿Cómo se llama tu producto? ");
var costo = prompt("¿Cuánto cuesta? ");
calculaCosto (costo, nombre);

function ambitoVar(){
const i = 1;
if (i == 1){
    ambitoVar = "Ambito de variable";
}
console.log (ambitoVar);
}
