const PromptSync = require("prompt-sync");
const prompt = require('prompt-sync')();
var horaDia = prompt('¿Que hora es? ');
var nombre = prompt('Ingresa tu nombre');
console.log("Hola "+nombre);
if (horaDia<=3){
    console.log("Está el equipo de football entrenando");
}
else if ((horaDia>3) && (horaDia <= 6)){
    console.log("Está usándose para tenis");
}
else if ((horaDia>6) && (horaDia <= 9)){
    console.log ("Está el equipo de poktapok")
}
//inverso

var deporte = prompt('Porfavor, dime qué deporte te interesa: ');

switch ( deporte ) {
    case "football":
        console.log("Horario de 3 a 6");
        break;
    case "Tenis":
        console.log("Horario de 6 a 9");
        break;
    case "Poktapok":
        console.log("Horario de 9 a 10");
        break;
}