// Operación que desea realizar
var opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();

// Validación para que 'opcion' NO contenga espaciado ni números (no supe como hacer que NO contenga caracteres especiales).
if (opcion === ' ' || opcion == parseFloat(opcion)) {
  alert('Operación inválida');
  window.location.reload();
}

// Ciclo while
while (opcion != "exit") {

  // De vuelta la validación para que 'opcion' NO contenga espaciado ni números porque la validación de la línea 4 queda afuera del ciclo.
  if (opcion === ' ' || opcion == parseFloat(opcion)) {
    alert('Operación inválida');
    window.location.reload();
  }

  // Números a ingresar.
  let numeroUno = parseInt(prompt("Un numero"));
  let numeroDos = parseInt(prompt("Otro numero"));

  // Cuerpo principal de las operaciones
  if (opcion == "sumar") {
    resultado = numeroUno + numeroDos;
    alert(`El resultado de la suma es ${resultado}`);
    opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();
  } else if (opcion == "restar") {
    resultado = numeroUno - numeroDos;
    alert(`El resultado de la resta es ${resultado}`);
    opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();
  } else if (opcion == "multiplicar") {
    resultado = numeroUno * numeroDos;
    alert(`El resultado de la multiplicación es ${resultado}`);
    opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();
  } else if (opcion == "dividir") {
    resultado = numeroUno / numeroDos;
    alert(`El resultado de la división es ${resultado}`);
    opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();
  } else {
    alert("No indicaste una operación válida.");
    opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();
  }
}
