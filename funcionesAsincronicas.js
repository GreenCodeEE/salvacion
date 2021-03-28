/*console.log("Inicio");
function dos (){
console.log("Dos");
}
function uno (){
console.log("Uno");
dos();
console.log("tres");
}
uno();
console.log("Fin");
*/
//--------------------------
function dos ()
{
    setTimeout( function(){
        console.log("dos");
    }, 1000);
}

function uno () 
{
    setTimeout(function () {
        console.log("UNO");
    }, 0);
    }
//P2-----------------------------------------------
console.log("Hola");
setTimeout(function timeout(){
    console.log("Mundo");
}, 4*1000);
console.log("Hola a los participantes");
//-------------------------------------------------
//funciones callback
/*function nombreFuncion1(parametros, callback){
    instrucciones
}*/
function primero (callback){
    setTimeout( function(){
        return callback("Primero");
    }, 5*1000);
}
function segundo (callback){
    return callback("segundo");
}

primero (function(resultado1){
    console.log(resultado1);
    segundo(function(resultado2){
        console.log(resultado2);
    });
});