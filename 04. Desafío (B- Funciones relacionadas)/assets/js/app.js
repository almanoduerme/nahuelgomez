// FUNCIONES RELACIONADAS

// Esta aplicación se encarga de sacar el promedio de los parciales realizados.

// Función que da comienzo a la aplicación.
function start() {
    alert("¡Hola! Averigüemos la nota final del alumno.");
    const cantidadDeParciales = Number(prompt("¿Cuántos parciales tuvo el alumno?"));
  
    if (cantidadDeParciales < 1 || cantidadDeParciales === " ") {
      alert("Caracter inválido");
      location.reload();
    } else if (cantidadDeParciales >= 1 || cantidadDeParciales <= 10) {
      const resultadoFinal = sacarResultado(Number(cantidadDeParciales));
      respuestaFinal(resultadoFinal);
    } else {
      alert("Caracter inválido");
      location.reload();
    }
  }
  
  // Función que se encarga de mostrar el resultado según la cantidad de parciales realizados.
  function sacarResultado(numeroDeParciales) {
    let sumaTotalParciales = 0;
    for (let i = 0; i < numeroDeParciales; i++) {
      let notaParcial = Number(prompt(`Ingrese la nota del parcial N° ${i + 1}`));
      while (notaParcial > 10 || notaParcial < 1 || notaParcial != parseInt(notaParcial) ) {
        alert("Número de nota no válido, tiene que ser un valor entre 1 y 10");
        notaParcial = Number(prompt(`Ingrese nuevamente la nota del parcial N° ${i + 1}`));
      }
  
      sumaTotalParciales = sumaTotalParciales + notaParcial;
    }
  
    return Math.round(sumaTotalParciales / numeroDeParciales);
  }
  
  // Esta función muestra un mensaje según el resultado de la nota final.
  function respuestaFinal(resultado) {
    switch (resultado) {
      case 10:
        alert(
          `La nota es un ${resultado}. ¡El alumno tiene la mejor nota de la cursada!`
        );
        break;
      case 9:
      case 8:
      case 7:
        alert(
          `La nota es un ${resultado}. El alumno aprobó pero no tiene la mejor nota.`
        );
        break;
      case 6:
      case 5:
        alert(`La nota es un ${resultado}. El alumno casi aprueba.`);
        break;
      default:
        alert(
          `La nota es un ${resultado}. El alumno es horrible. ¡Que se dedique a otra cosa!`
        );
        break;
    }
  }
  
  start();
  