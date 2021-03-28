let persona = {
    nombre: "Zazil",
    apellido: "May",
    edad: "20 años",
}
//con descomposicón
let {nombre, apellido} = persona;
console.log("El nombre del participante es " + nombre + " " + apellido);
//Ejemplo número 2
let celular = {
    color: "rojo",
    numCam: "4"
}
let {numCam} = celular;
console.log ("El celular tiene "+ numCam +" cámaras");
//Ejemplo número 3
var paquete = {
    numEnvio: 585930 ,
    dir: "Calle Xolotl",
    peso: "3kg",
}
var numEnvio, peso;
({ numEnvio, peso } = paquete);
console.log(numEnvio);

//ejemplo de valor por defecto
const { nombre: nombreSustituto = "Santiago", apellidoN3 } =persona;
console.log("El nombre es: "+ nombre +" "+apellidoN3)

let persona2 = {nombreN2: "Omar", edad:20}
var {nombreN2, apellido: apellidoN2 = "Lopez" } = persona2;
console.log("El nombre de la persona es: "+ nombreN2 + " " + apellidoN2 );

//descomposición en funciones
let envio = {
    numEnvio: 303030303,
    producto: "tarjeta de video"
}

function datoEnvio ({numEnvio, producto}){
    console.log ("El numero de envio es: "+ numEnvio);
    console.log ("El producto a enviar es: "+producto );
}
datoEnvio(envio);