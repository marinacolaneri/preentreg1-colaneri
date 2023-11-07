    document.addEventListener("DOMContentLoaded", function () {
      const productosContainer = document.getElementById("productos-container");

      fetch('./productos.json')
        .then((response) => response.json())
        .then((productos) => {
          productos.forEach((producto) => {
            const divProducto = document.createElement("div");
            divProducto.classList.add(producto.nombre.toLowerCase());

            const img = document.createElement("img");
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.addEventListener("click", () => {
              opcionesProducto(producto);
            });

            if (producto.tallas) {
              const select = document.createElement("select");
              select.id = `opciones${producto.nombre}`;
              select.style.display = "none";
              producto.tallas.forEach((talla) => {
                const option = document.createElement("option");
                option.value = talla;
                option.textContent = talla;
                select.appendChild(option);
              });
              divProducto.appendChild(select);
            } else if (producto.colores) {
              const select = document.createElement("select");
              select.id = `opciones${producto.nombre}`;
              select.style.display = "none";
              producto.colores.forEach((color) => {
                const option = document.createElement("option");
                option.value = color;
                option.textContent = color;
                select.appendChild(option);
              });
              divProducto.appendChild(select);
            }

            const p = document.createElement("p");
            p.textContent = `Precio: $${producto.precio}`;

            const button = document.createElement("button");
            button.textContent = "Agregar al carrito";
            button.addEventListener("click", () => {
              carritoCompras(producto, `opciones${producto.nombre}`);
            });

            divProducto.appendChild(img);
            divProducto.appendChild(p);
            divProducto.appendChild(button);

            productosContainer.appendChild(divProducto);
          });
        })
        .catch((error) => {
          console.error('Error en la carga de productos:', error);
        });
    });

    const saludoBtn = document.getElementById("saludoBtn");
    saludoBtn.addEventListener("click", function () {
      const nombreUsuario = document.getElementById("nombre").value;

      Swal.fire({
        title: `¡Hola, ${nombreUsuario}!`,
        text: 'Bienvenido a MAMILAS Ropa informal',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }); 

    function opcionesProducto(producto) {
      const selectId = `opciones${producto.nombre}`;
      const selectElement = document.getElementById(selectId);
      selectElement.style.display = "block";
    }

    function carritoCompras(producto, selectId) {
      const selectElement = document.getElementById(selectId);
      const opcionSeleccionada = selectElement.value;
    
      if (opcionSeleccionada) {
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = `${producto.nombre} - Opción: ${opcionSeleccionada} - Precio: $${producto.precio}`;
    
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", () => {
          eliminarProducto(nuevoProducto, producto.precio);
        });
    
        nuevoProducto.appendChild(eliminarBtn);
    
        const carrito = document.getElementById("carrito");
        carrito.appendChild(nuevoProducto);
    
        const total = document.getElementById("total");
        const precioFloat = parseFloat(producto.precio);
        const totalFloat = parseFloat(total.textContent);
        total.textContent = (totalFloat + precioFloat).toFixed(2);
      }
    }
    

    function eliminarProducto(producto, precio) {
      const carrito = document.getElementById("carrito");
      carrito.removeChild(producto);

      const total = document.getElementById("total");
      const precioFloat = parseFloat(precio);
      const totalFloat = parseFloat(total.textContent);
      total.textContent = (totalFloat - precioFloat).toFixed(2);
    }

    function reinicioCarrito() {
      const carrito = document.getElementById("carrito");
      carrito.innerHTML = "";

      const total = document.getElementById("total");
      total.textContent = "0";
    }

    const finalizarCompraBtn = document.getElementById("finalizar");
    finalizarCompraBtn.addEventListener("click", function () {
      const nombreUsuario = document.getElementById("nombre").value;

      const total = document.getElementById("total").textContent;
     
  
      Swal.fire({
        title: `¡Gracias por tu compra, ${nombreUsuario}!`,
        text: `Total: $${total}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        iconHtml: '<i class="bi bi-emoji-wink"></i>'
      });
      

      reinicioCarrito();
    });

    window.addEventListener("load", function () {
      const carritoGuardado = localStorage.getItem("carrito");
      const totalGuardado = localStorage.getItem("total");

      if (carritoGuardado && totalGuardado) {
        const carrito = document.getElementById("carrito");
        carrito.innerHTML = carritoGuardado;

        const total = document.getElementById("total");
        total.textContent = totalGuardado;
      }
    });

    window.addEventListener("beforeunload", function () {
      const carrito = document.getElementById("carrito").innerHTML;
      const total = document.getElementById("total").textContent;

      localStorage.setItem("carrito", carrito);
      localStorage.setItem("total", total);
    });
