// Bienvenida
alert("Bienvenido a la tienda de tus sueños. Elegí 5 productos gratis.");

// Ciclo for
for (let i = 1; i < 6; i++) {
  // Ingresa un valor
  let producto = prompt(`Ingresá el producto N° ${i}.`);

  // Alerta muestra el producto ingresado
  alert(`El producto N° ${i} es ${producto}.`);

  // Lo mando a la consola para graficar todos los instrumentos ingresados
  console.log(`El producto N° ${i} es ${producto}.`);

  if (i == 5) {
    alert(
      "Los productos estarán llegan a tu casa dentro de los primeros 5 días hábiles."
    );
  }
}
