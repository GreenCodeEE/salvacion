const prompt = require ('prompt-sync')();
console.log("Hola, hoy calcularemos tu numero de la suerte");
var anio = prompt ("¿Qué año naciste? ");
var mes = prompt ("¿En qué mes naciste? ");
var dia = prompt ("¿En qué día naciste? ");

var num1 = ((dia*10000) + (mes*100) + (anio%100)); 
//console.log(num1);
var num2 = ((mes*10000)+(dia*100)+((anio%100)));
//console.log(num2);
var res = num1-num2;
if (res<0){
    res *= -1;
}
//console.log(res);
var sum1 = parseInt(res/100000);
//console.log(sum1);
var sum2 = parseInt((res%100000)/10000);
//console.log(sum2);
var sum3 = parseInt((res%10000)/1000);
//console.log(sum3);
var sum4 = parseInt((res%1000)/100);
//console.log(sum4);
var sum5 = parseInt((res%100)/10);
//console.log(sum5);
var sum6 = parseInt((res%10));
//console.log(sum6);
var suma = (sum1+sum2+sum3+sum4+sum5+sum6);
//console.log(suma);
while (suma>9){
    var summ1 = (parseInt(suma/10));
    //console.log(summ1);
    var summ2 = (suma%10);
    //console.log(summ2);
    var suma = (summ1 + summ2);
}
console.log("Tu número de la suerte es: " + suma + ", Yei :D");



