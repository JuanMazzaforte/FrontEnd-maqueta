var login = document.querySelector("#login");
var singin = document.querySelector("#singin");
var logout = document.querySelector("#logout");
var profile = document.querySelector('.profile-picture');
var imagen = profile.firstElementChild;
var email = document.querySelector('#floatingInput');
var pass = document.querySelector('#floatingPassword');
var icons = document.getElementById('iconos');
var edicion = document.querySelectorAll('.java');
login.addEventListener("click", function () {
    if (email.value == "usuario" && pass.value == "usuario") {
        imagen.classList.add('image');
        edicion.forEach(function (edit) {
            edit.classList.remove('visually-hidden');
        });
        singin.classList.add('visually-hidden');
        logout.classList.remove('visually-hidden');
        icons.id = 'iconos-dashboard';
    }
});
logout.addEventListener("click", function () {
    imagen.classList.remove('image');
    edicion.forEach(function (edit) {
        edit.classList.add('visually-hidden');
    });
    singin.classList.remove('visually-hidden');
    logout.classList.add('visually-hidden');
    icons.id = 'iconos';
});
