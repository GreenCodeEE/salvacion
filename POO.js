//creación de un objeto
var celular = {
    color: "Azul",
    peso: "80kg",
    numCam: 4,
    sistma: "Android",
    duracionBateria: 10

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
    }
}

let galletaChocolate = new galleta("5x5cm","cuadrado","Chocolate");
var galletaVainilla = new galleta("6cm", "Círculo", "Vainilla");
console.log(galletaChocolate);
console.log(galletaVainilla);
console.log(galletaChocolate.sabor);
console.log(galletaVainilla.sabor);

//Agregando un comentario