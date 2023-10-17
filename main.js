const saludoBtn = document.getElementById("saludo");
saludoBtn.addEventListener("click", function() {
  const nombreUsuario = document.getElementById("nombre").value;
  alert(`¡Hola, ${nombreUsuario}! Bienvenido a MAMILAS Ropa informal`);
});

function tallesDisponibles(nombre, precio) {
  const selectId = `talles${nombre}`;
  const selectElement = document.getElementById(selectId);
  selectElement.style.display = "block";
}

function carritoCompras(nombre, precio, selectId) {
  const selectElement = document.getElementById(selectId);
  const talleSeleccionado = selectElement.value;

  if (talleSeleccionado) {
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = `${nombre} - Talle: ${talleSeleccionado} - Precio: $${precio}`;

    const carrito = document.getElementById("carrito");
    carrito.appendChild(nuevoProducto);

    const total = document.getElementById("total");
    const precioss = parseFloat(precio); 
    const totalCompra = parseFloat(total.textContent);
    total.textContent = (totalCompra + precioss).toFixed(2); 
  }
}

const finalizarCompraBtn = document.getElementById("finalizar");
finalizarCompraBtn.addEventListener("click", function() {
  const nombreUsuario = document.getElementById("nombre").value;

  const total = document.getElementById("total").textContent;
  alert(`¡Gracias por tu compra! Total: $${total}`);
});