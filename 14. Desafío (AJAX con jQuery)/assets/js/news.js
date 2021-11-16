// Menu burger responsive
$(".fa-bars").on("click", function () {
  $(".home_nav002").fadeToggle(600);
  $(".aboutSectionOne").slideToggle(1400);
});

// Dark Mode
$(document).ready(function () {
  $("#darkMode").on("click", function () {
    $("#body").toggleClass("darkMode");
  });
});

// LOGOUT
let logout = document.querySelectorAll(".logout");

logout.forEach(function (logoutItem) {
  logoutItem.addEventListener("click", cerrarSesion);
});

// Función que se encarga de eliminar los datos del local storage y redirecciona al usuario hacia la página principal.
function cerrarSesion() {
  modalCierreDeSesion();
  window.localStorage.clear();
}

// Crear una función que abra un modal, y que hasta que no cierre el modal, no se ejecute la limpieza del Local Storage y el redireccionamiento.

function modalCierreDeSesion() {
  let modalContainer = document.querySelector(".modalContainer");
  modalContainer.classList.add("modalContainerON");
}

// Effects
$(document).ready(function () {
  $("#btnFadeOut").click(function () {
    $(".parrafo").fadeOut(3000, function () {
      $("#btnFadeOut").text("Its Gone");
    });
  });
  $("#btnFadeIn").click(function () {
    $(".parrafo").fadeIn(3000);
  });
  $("#btnFadeTog").click(function () {
    $(".parrafo").fadeToggle(1000);
  });
});

// API => DOLARSI

let urlNYT = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$("#botonNYT").click(function () {
  $.get(urlNYT, function (datos) {
    $(".articleOne").prepend(`<div class='dolar'>Compra: ${datos[0].casa.compra}</div>
                              <div class='dolar'>Venta: ${datos[0].casa.venta}</div>`);
  });
});
