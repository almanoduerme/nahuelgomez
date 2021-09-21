// VARIABLE GLOBAL
let opcion = prompt("¿Desea ver un producto?").toLowerCase();

// ARRAY
const productos = ["Guitarra", "Bajo", "Batería", "Teclado"];

if (opcion == "si")
  for (let i = 0; i < productos.length; i++) {
    alert(productos[i]);
    let moreProducts = prompt("¿Desea ver otro producto?").toLowerCase();
    if (moreProducts == "no") {
      alert("Gracias por la visita.");
      break;
    }
  }
else {
  alert("Gracias por la visita.");
}
