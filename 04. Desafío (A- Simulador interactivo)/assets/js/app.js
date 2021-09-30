// Twitter

// Función que registra al usuario.
function registrarUsuario() {
  let nombreUsuario = prompt("Ingrese su nombre");
  let edadUsuario = Number(prompt("Ingrese su edad"));
  let correoUsuario = prompt("Ingrese su correo electrónico");
  let pwUsuario = prompt("Ingrese su contraseña");

  // Se llama a la función para saludar al usuario
  saludarUsuario(nombreUsuario, edadUsuario, correoUsuario, pwUsuario);
  }

// Función que saluda al usuario y muestra sus datos.
function saludarUsuario(nombre, edad, correo, pw) {
  alert(`Bienvenido a Twitter ${nombre}. Usted tiene ${edad} años. Su correo electrónico es ${correo} y su contraseña es ${pw}.`);

  // Se llama a la función para publicar el primer tweet y mostrarlo en consola.
  publicarTweet(nombre);
}

// Función para publicar el primer tweet en consola.
function publicarTweet(nombre) {
  alert(`Bien ${nombre}. Ahora vamos a publicar su primer tweet y lo mostraremos en consola.`);
  let tweet = prompt("Ingrese su primer tweet");
  console.log(tweet);
  alert('Apreta F12 y mira tu primer tweet en consola.')
}

// Función que da inicio al registro de usuario.
registrarUsuario();
