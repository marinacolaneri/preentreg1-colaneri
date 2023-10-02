let nombre = prompt ("¿cual es su nombre?");
nombre = nombre.toUpperCase();

alert ("bienvenido a MAMILAS Ropa informal" + " " + nombre); 

let prendas =  {
    buzo: 5200,
    remera: 3200,
    jean: 9000, 
}
console.log(prendas); 

let talles = [ "small" , "madium" , "large" , "36" , "38" , "40" , "42" , "44" , "46"];
talles.push ("Xsmall");
console.log (talles)


let consulta = prompt("Ingrese la prenda que desea comprar: \n1 Remera \n2 Jean \n3 Buzo");


if (consulta == 1){

    
    alert ('Hay stock en talle \n1 small \n2 large'); 
    
    let talle = prompt ("¿que talle buscas?"); 

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
      
        alert ('Hay stock en talle \n1 small \n2 medium');

        let talle = prompt ("¿que talle buscas?"); 
    
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

 
