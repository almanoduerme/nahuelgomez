let name = prompt("Ingrese su nombre");
let surname = prompt("Ingrese su apellido");
let yearOfBirth = prompt("Ingrese su año de nacimiento");
let currentYear = prompt("Ingrese el año actual");
let age = parseInt(currentYear) - parseInt(yearOfBirth);

alert(`¡BIenvenido ${name} ${surname}! Usted tiene ${age} años.`); 
