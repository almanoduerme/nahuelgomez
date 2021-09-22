// VARIABLE GLOBAL
let opcion = prompt("¿Desea ver un producto?").toLowerCase();

// ARRAY
const productos = ["Guitarra", "Bajo", "Batería", "Teclado"];

if (opcion == "si" && opcion != "" && opcion != NaN) {
  for (let i = 0; i < productos.length; i++) {
    alert(productos[i]);
    let moreProducts = prompt("¿Desea ver otro producto?").toLowerCase();
    if (moreProducts == "no") {
      alert("Gracias por tu visita.");
      break;
    }
  }
} else if (parseFloat(opcion)) {
  alert("Es un numero. Tenes que responder SI o NO. Empecemos de vuelta");
  window.location.reload();
} else if (opcion === ' ') {
  alert("Es un espacio vacio. Empecemos de vuelta");
  window.location.reload();
} else {
  alert('Gracias por visitarnos.')
}

// Ver como validar caracteres especiales