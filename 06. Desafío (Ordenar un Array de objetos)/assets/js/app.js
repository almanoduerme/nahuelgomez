// VARIABLES GLOBALES

// ARRAYS

// Acá se suben todos los tweets.
let todosLosTweets = [];

// OBJECTS

class Tweets {
  constructor(tweet) {
    this.tweet = tweet;
  }
}

// FUNCIONES

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
  alert(
    `Bienvenido a Twitter ${nombre}. Usted tiene ${edad} años. Su correo electrónico es ${correo} y su contraseña es ${pw}.`
  );

  // Se llama a la función para publicar el primer tweet y mostrarlo en consola.
  publicarTweet();
}

// Función que se utiliza para pedir el tweet y transformarlo en un objeto.
function publicarTweet() {
  let tweet = prompt("Ingrese su tweet");

  let tweets = new Tweets(tweet);

  let publicarMasTweets = prompt("¿Deseas hacer otro tweet? Responde SOLO POR SI/NO").toLowerCase();
  tuitASumar = tweets.tweet; //.tweet => Para que devuelva el valor del objeto.
  todosLosTweets.push(tuitASumar);

  if (publicarMasTweets == "si") {
    publicarTweet();
  } else {
    alert("no mas tweets");
  }
}

// Función que elimina el último tweet.
function eliminarUltimoTweet(todosLosTweets) {
  let opcionEliminar = prompt("¿Desea eliminar el último tweet?");

  if (opcionEliminar == "si") {
    todosLosTweets.pop();
  }
}

function ordenarArray() {
  alert("Ahora te voy a mostrar (por consola) el array ordenado de menor a mayor / A-Z");

  // Ordenar el array 'todosLosTweets' de A-Z / 0-100.
  todosLosTweets.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  console.log(todosLosTweets);
}

// Función que da inicio al registro de usuario.
registrarUsuario();

// Llamada a la función que elimina el último tweeet.
eliminarUltimoTweet(todosLosTweets);

// Llamada a la función que ordena el array de menor a mayor.
ordenarArray();
