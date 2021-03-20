const practica1 = 9;
const practica2 = 8;
const practica3 = 10;
const practica4 = 11;
var calificacionMenor = practica1;
if (practica2<calificacionMenor){
calificacionMenor=practica2;
}
if (practica3<calificacionMenor){
    calificaionMenor=practica3;
}
if (practica4<calificacionMenor){
    calificacionMenor=practica4;
}
var promedio = (practica1+practica2+practica3+practica4-calificacionMenor)/3
console.log( calificacionMenor );
console.log( promedio );
console.log(practica1);

