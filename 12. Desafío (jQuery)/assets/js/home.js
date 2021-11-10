// NAVBAR => HOME => ON

// Menu burger responsive
$(".fas").on("click", function () {
  $(".home_nav002").toggle();
});

// NAVBAR => HOME => OFF

// HOME => TUITAH => ON

let arrayDeTweets = [];

let btnSend = document.querySelector(".send");
btnSend.addEventListener("click", crearTweet);

function crearTweet() {
  let escribirTweet = document.querySelector(".home_escribir_tweet");
  if (escribirTweet.value == "") return;
  let usuario = localStorage.getItem("userUser");

  loadTweets();

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
  fila.id = objCrearTweet.id;
  let deletear = document.createElement("div");
  deletear.innerHTML = "Eliminar";
  deletear.classList.add("eliminarEsteTweet");
  deletear.style.cursor = 'pointer';
  deletear.addEventListener("click", eliminarTweet);

  fila.classList.add("tweet");
  fila.innerHTML = `<p class="user">@${objCrearTweet.usuario}</p>
                    <p>${objCrearTweet.tweet}</p>`;

  sectionTwo.appendChild(fila);
  fila.appendChild(deletear);
}

function eliminarTweet(e) {
  let hijo = e.target;
  let padre = hijo.parentNode;
  eliminarTweetDelLocalStorage(padre.id);
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

function eliminarTweetDelLocalStorage(tweetId) {
  let tweetsGuardados = JSON.parse(localStorage.getItem("tweetsGuardados"));

  const nuevoArray = tweetsGuardados.filter((tweet) => tweetId != tweet.id);
  localStorage.setItem("tweetsGuardados", JSON.stringify(nuevoArray));
}

console.log(arrayDeTweets);
iniciarPrograma();
