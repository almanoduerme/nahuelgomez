
var opcion = prompt("¿Querés sumar, restar, multiplicar o dividir? ESCRIBE 'EXIT' PARA SALIR.").toLowerCase();

while (opcion != "exit") {
  let numeroUno = parseInt(prompt("Un numero"));
  let numeroDos = parseInt(prompt("Otro numero"));

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
