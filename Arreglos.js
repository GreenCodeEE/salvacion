/*var arreglo = [1,2,3,4,"lol",6,7,8];
var arregloNombres = ["Luis","Diana","Omar","Paola"];
console.log (arreglo[4]);
console.log (arregloNombres[2]);
arregloNombres[2] = "Ahn Yuna";
console.log (arregloNombres[2]);
delete arregloNombres[3];
console.log (arregloNombres);
console.log("La cantidad de elementos en el arreglo es "+ arregloNombres.length);
arregloNombres.push ("Ayakaaa");
arregloNombres.push ("Someone");
console.log (arregloNombres);
arregloNombres.pop ();
console.log(arregloNombres);
arregloNombres.splice(0,0,"Maya");
console.log(arregloNombres);
arregloNombres.splice(1,2);
arregloNombres.splice(2,1);
console.log(arregloNombres);
*/

//programa
const prompt = require('prompt-sync') ();
var calificaciones = [];
calificaciones[0] = prompt('Ingrese la primera calificación: ');
calificaciones[1] = prompt('Ingrese la segunda calificación: ');
calificaciones[2] = prompt('Dame la tercera calificacion: ');
calificaciones[3] = prompt('Dame la cuarta calificación; ');
calificaciones[4] = prompt('Dame la quinta calificación: ');
var resultado = ((calificaciones[0] + calificaciones[1] + calificaciones[2] + calificaciones[3] + calificaciones[4])/5)
console.log(resultado);