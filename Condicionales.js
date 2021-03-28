var numero =837;
if (1000>numero && numero>99){
    console.log(numero);
    var centenas = parseInt(numero/100);
    //console.log(centenas);
    var decenas = parseInt((numero%100)/10);
    //console.log(decenas);
    var unidades = ((numero%100)-(decenas*10));
    //console.log(unidades);
    console.log("Centenas: "+ centenas + " Decenas: " + decenas + " Unidades: " + unidades);
    nuevoNumero = (unidades*100 + decenas*10 + centenas);
    console.log(nuevoNumero);
}
else{

    console.log("ingresa un número de 3 cifras")
}

var conSwitch = 6;
switch (conSwitch){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log("El valor ingresado es: 6"); 
        break;   
    default:
        console.log("El valor ingresado es: distincto");
        break;
}


