//creación de un objeto
/*var celular = {
    color: "Azul",
    peso: "80kg",
    numCam: 4,
    sistma: "Android",
    duracionBateria: 10,
    prender : function() {return "prendiendo..."},
    reiniciar : function() {return "reiniciando"},
    apagar : function(){return "Apagando"},
}
console.log(celular.duracionBateria);
console.log(celular);
console.log(celular["peso"]);
//clases no son objetos
class galleta{
    constructor(tamanio, forma, sabor){
        this.tamanio = tamanio;
        this.forma = forma;
        this.sabor = sabor;
        this.hornear = function() {return "horneando..."}
    }
}
var galletaLimon = new galleta ("grande", "pentagono", "umami");
console.log(galletaLimon.hornear());
let galletaChocolate = new galleta("5x5cm","cuadrado","Chocolate");
var galletaVainilla = new galleta("6cm", "Círculo", "Vainilla");
console.log(galletaChocolate);
console.log(galletaVainilla);
console.log(galletaChocolate.sabor);
console.log(galletaVainilla.sabor);

//Agregando un comentario
console.log(celular.prender());*/

//------------------------------------------------------------------------------
var frutaN1 = {nombre: "Manzana"};
var frutaN2 = {nombre: "Manzana"};
var resultado = (frutaN1 == frutaN2);
console.log(resultado);
var frutaN3 = frutaN1;
var resultadoN2 = (frutaN3 == frutaN1);
console.log (resultadoN2);
var resultadoN3 = (frutaN1.nombre == frutaN2.nombre);
console.log(resultadoN3);
//-----------------------------------------------------------------------------
//descomposición de objetos
//tipoDeclaración = { nombreVariable } = nombreObjeto;