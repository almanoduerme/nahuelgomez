const username = prompt("Ingrese su nombre");
const userAge = Number(prompt("Ingrese su edad"));

if (userAge >= 18 && userAge <= 44) {
  alert(`¡Hola ${username}! Tenes ${userAge} años. ¡Podes entrar al bar!`);
} else if (userAge >= 45) {
  alert(`¡Hola ${username}! Podes entrar al bar y tenes dos cervezas de regalo.`);
} else {
  alert(`¡Hola ${username}. Tenes ${userAge} años. ¡No podes entrar al bar!`);
}

 