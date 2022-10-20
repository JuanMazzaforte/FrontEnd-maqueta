const login = document.querySelector(`#login`) as HTMLButtonElement;
const singin = document.querySelector(`#singin`) as HTMLButtonElement;
const logout = document.querySelector(`#logout`) as HTMLButtonElement;
const profile = document.querySelector('.profile-picture') as HTMLDivElement;
const imagen = profile.firstElementChild as HTMLImageElement;
const email = document.querySelector('#floatingInput') as HTMLInputElement;
const pass = document.querySelector('#floatingPassword') as HTMLInputElement;
const icons = document.getElementById('iconos') as HTMLUListElement;


const edicion = document.querySelectorAll('.java');


login.addEventListener("click" ,()=> {
    if (email.value == "usuario" && pass.value == "usuario") {
        imagen.classList.add('image');
        edicion.forEach(edit => {
            edit.classList.remove('visually-hidden');
        });
        singin.classList.add('visually-hidden');
        logout.classList.remove('visually-hidden');
        icons.id = 'iconos-dashboard';
    }
});

logout.addEventListener("click", ()=> {
    imagen.classList.remove('image');
    edicion.forEach(edit => {
        edit.classList.add('visually-hidden');
    });
    singin.classList.remove('visually-hidden');
    logout.classList.add('visually-hidden');
    icons.id = 'iconos';
})