let local = "MAMILAS Ropa informal"

console.log (local)

let consulta = prompt("Ingrese la prenda que desea comprar: \n1 Remera \n2 Jean \n3 Buzo");

let talle 

let small

if (consulta == 1){

    let small
    let large

    alert ('Hay stock en talle \n1 Small \n2 Large')

    if (talle == 1) {

        alert ('Hay stock')

    }else if(talle == 2){

        alert ('Hay stock')
    }
}else if (consulta == 2){

    let jean = prompt ("ingrese el talle");

    if (jean >= 36 && jean < 46) {

    alert ('Hay stock!');

    }else if (jean < 36 && jean  >= 46) {
    
        alert ('No tenemos stock disponible');
    }
   
}else if (consulta == 3){
   
    let small
    let medium
    
        alert ('Hay stock en talle \n1 Small \n2Medium')

    talle = prompt ("¿Que talle buscas?")
    
    if (talle == 1){

        alert ('Hay stock')
      
    }else if (talle == 2){

        alert ('Hay stock')
 
     }else{
 
        alert ('No hay stock')
     }

}
 
let buzo = 5200
let remera = 3200
let jean = 9000

function sumarCompra (buzo, remera, jean ){
    return buzo + remera + jean;
  
}

    console.log(sumarCompra (5200,3200,9000));




