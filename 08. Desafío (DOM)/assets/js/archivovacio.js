// FORM

function mostrarDatos() {
    let nombre = document.querySelector("#name");
    let apellido = document.querySelector("#surname");
    let usuario = document.querySelector("#username");
    let email = document.querySelector("#email");
    let pass = document.querySelector("#password");
    let passConfirm = document.querySelector("#passConfirm");
    let mostrarForm = document.querySelector("#mostrarFormulario");
  
    let p = document.createElement("p");
    mostrarForm.appendChild(p);
  
  
  
    mostrarForm.style.textAlign = "center";
    mostrarForm.style.backgroundColor = "#4F4F4F";
    mostrarForm.style.color = "white";
    mostrarForm.style.padding = "1rem";
  
    mostrarForm.innerHTML = `<h1>Los datos ingresados son:</h1>
                             <p>Nombre: ${nombre.value}</p>
                             <p>Apellido: ${apellido.value}</p>
                             <p>Usuario: ${usuario.value}</p>
                             <p>Correo electrónico: ${email.value}</p>
                             <p>Contraseña: ${pass.value}</p>
                             <p>Contraseña confirmada: ${passConfirm.value}</p>`;
  
    mostrarForm.style.width = "90%";
    mostrarForm.style.height = "50%";
    mostrarForm.style.margin = '0 auto';
    mostrarForm.style.marginTop = '3rem';
    mostrarForm.style.display = "flex";
    mostrarForm.style.flexDirection = "column";
  }
  
  // MODAL => TERMS AND CONDITIONS
  
  let modalBtn = document.querySelector(".termsAndConditions");
  let modalBg = document.querySelector(".modal-bg");
  let modalClose = document.querySelector(".modal-close");
  
  modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
  });
  
  modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });
  