// NAVBAR => HOME => ON
// let header = document.querySelector("#home_header");
let bars = document.querySelector(".fas");
// let nav002 = document.querySelector(".home_nav002");
// let homeMain = document.querySelector("#homeMain");
// let mostrar = false;

// Menu burger responsive con jQuery
$(".fas").on("click", function () {
  $(".home_nav002").toggle();
});

// NAVBAR => HOME => OFF

// HOME => TUITAH => ON

let arrayDeTweets = [];

let btnSend = document.querySelector(".send");
btnSend.addEventListener("click", crearTweet);

function crearTweet() {
  usuario = localStorage.getItem("userUser");

  loadTweets();

  let escribirTweet = document.querySelector(".home_escribir_tweet");

  const objCrearTweet = {
    usuario: usuario,
    tweet: escribirTweet.value,
    id: generarNumeroRandom(),
  };

  arrayDeTweets.push(objCrearTweet);

  localStorage.setItem("tweetsGuardados", JSON.stringify(arrayDeTweets));

  escribirTweet.value = "";
  mostrarTweet(objCrearTweet);
}

function mostrarTweet(objCrearTweet) {
  let sectionTwo = document.querySelector(".home_section_two");
  let fila = document.createElement("div");
  let deletear = document.createElement("div");
  deletear.innerHTML = "Eliminar";
  deletear.classList.add("eliminarEsteTweet");
  deletear.addEventListener("click", texto);

  fila.classList.add("tweet");
  fila.innerHTML = `<p class="user">@${objCrearTweet.usuario}</p>
                    <p>${objCrearTweet.tweet}</p>`;

  sectionTwo.appendChild(fila);
  fila.appendChild(deletear);
}

function texto() {
  let botonCompra = document.querySelectorAll(".eliminarEsteTweet");

  for (let boton of botonCompra) {
    boton.addEventListener("click", eliminarTweet);
  }
}

function eliminarTweet(e) {
  let hijo = e.target;
  let padre = hijo.parentNode;
  padre.remove();

}

function generarNumeroRandom() {
  return Math.floor(Math.random() * 10000);
}

function loadTweets() {
  let tweetsGuardados = localStorage.getItem("tweetsGuardados");

  if (tweetsGuardados) {
    tweetsGuardados = JSON.parse(tweetsGuardados);
    arrayDeTweets = tweetsGuardados;
  }
}

function iniciarPrograma() {
  loadTweets();
  imprimirArrayDeTweets(arrayDeTweets);
}

function imprimirArrayDeTweets(array) {
  for (let i = 0; i < array.length; i++) {
    mostrarTweet(array[i]);
  }
}

console.log(arrayDeTweets);
iniciarPrograma();
