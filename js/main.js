
function calcularPeso(){
  var peso = document.getElementById("peso").value;
  var planeta = document.getElementById("planeta").value;

  if(validar(peso,planeta)){
    var grav = gravedad(planeta);
    var pesoTotal = peso * grav / 9.8;
    alert("Tu peso es de: " + pesoTotal.toFixed(2));
  }

}

function validar(peso,planeta){

  if(peso != "" && planeta != ""){
    peso = parseFloat(peso);
    if(!isNaN(peso) && peso >= 0){ return true;}else{
      alert("Peso incorrecto");
    }
  }else{
    alert("Falta Ingresar datos");
  }

}

function gravedad(planeta){
  var grav;
  switch (planeta) {
    case "1": grav = 3.7;
      break;
    case "2": grav = 8.87;
      break;
    case "3": grav = 9.8;
        break;
    case "4": grav = 3.7;
        break;
    case "5": grav = 23.12;
        break;
    case "6": grav = 8.96;
        break;
    case "7": grav = 8.69;
        break;
    case "8": grav = 11;
        break;
    case "9": grav = 0.81;
        break;
    default:
              grav = 0;
  }
  return grav;
}
