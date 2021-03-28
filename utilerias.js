//bibliotecas
var sauldo = "Hola, buenas tardes";
// para obtener números aleatorios Math.random

console.log(Math.round((Math.random()*10)));
exports.numAleatorio = () => {
    resultado = Math.round(Math.random());
}
//metodos de cadenas
//nombreCadena.length;
//nombreCadena.indexOf(texto);
var cadenaTexto = "Hola Lucia, buenas tardes";
console.log(cadenaTexto.length);
console.log(cadenaTexto.indexOf("Lucia"));
//nombreCadena.replace(antes, despues);
//nombreCadena.slice(inicial, final);
console.log(cadenaTexto.replace("Lucia", "Zazil"));
var lol = cadenaTexto.slice(5, 10);
console.log(lol);
//Nuevos Métodos
//Metodo nobmreCadena.toUpperCase();
var cadenaT = "ColOr dEl CuaDerNo: ";
var color = "Azul";

var textoFinal = cadenaT.toLowerCase();
console.log(textoFinal);


//Metodo nombreCadena.toLowerCase();
//Metodo nombreCadeaN1.concat( nombreCadenaN2);

console.log(textoFinal.concat(color));


