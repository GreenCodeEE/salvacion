//declaracion de una funcion
function multiplica ( primerOperando, segundoOperando ){
var resultado = primerOperando*segundoOperando;
console.log("El resultado de la funcion es " + resultado);
}
multiplica(12,4);
//funcion como expresión
var resultado2 = function multiplica2 (primerOperando){
    return 2*primerOperando;
}
console.log("El resultado es: " + resultado2 (25) );

//funciones flecha sintaxis corta
var saludaPersona = (Nombre) => console.log("Hola " + Nombre);
saludaPersona("Guillermo"); 

const prompt = require('prompt-sync')();
function determinaNumero (numero){
    if ((numero%2) == 0){
        console.log("El número " + numero + " es par");
    }
    else{
        console.log("El número " + numero + " es impar");
    }
}
var numero = prompt("Dame un número: ");
determinaNumero(numero);

//determinador de mayusculas y minusculas
function determinaTexto (texto){
    if (texto == texto.toUpperCase()){
        console.log("El texto está en mayúsculas");
    }
    else{
        console.log("El texto está en minúsculas");
    }
}
var texto = prompt("Escribe tu texto: ");
determinaTexto (texto);

