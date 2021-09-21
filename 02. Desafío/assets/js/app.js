const username = prompt("Ingrese su nombre");
const userAge = Number(prompt("Ingrese su edad"));

if (userAge >= 18) {
  alert(`¡Hola ${username}. Tenes ${userAge} años. ¡Podes entrar al bar!`);
} else {
  alert(`¡Hola ${username}. Tenes ${userAge} años. ¡No podes entrar al bar!`);
}
