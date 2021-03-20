//Utilizamos el cilclo While
var contador = 5;
var contador2 = 30; 

/*while ( contador>=0 ){
    console.log("Hola");
    contador--;
}
while (contador2 < 20 ){
    console.log("Numero de iteraciones: "+ contador2);
    contador2++;
}
*/
while(contador<10 && contador2 > 25){
console.log ("contadorN1: " + contador + "contadorN2" + contador2);
contador++;
contador2--;
}

var contador3 = 0;
var condicion = "Hola"
do {
    if(contador3 < 2) {
    contador3++;    
    }
    else{
        condicion = "adios";
    }
    console.log(condicion);
}while (condicion == "Hola");
var condicion3 = 25;
do{
    console.log(condicion3);
    condicion3 -= 5;
}while (condicion3 >= 5);

var suma = 0
const prompt = require('prompt-sync') ();
var recibeNumero;

/*do{
recibeNumero = prompt ('dame un numero: ' );
suma += parseInt(recibeNumero);
}while (recibeNumero != 0);
console.log(suma);
suma=0;
*/
while (recibeNumero !=0 ){
    recibeNumero = prompt ('dame un numero: ' );
    suma += parseInt(recibeNumero);
}
if (recibeNumero == 0){
    console.log (suma);
}


recibeNumero = prompt ('dame un numero: ' );
while (recibeNumero !=0 ){
    recibeNumero = prompt ('dame un numero: ' );
    suma += parseInt(recibeNumero);
}
    console.log (suma);