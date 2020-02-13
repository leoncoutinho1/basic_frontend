const backLogin = document.getElementById('backLogin');
const backSignup = document.getElementById('backSignup');

const btnLogin = document.getElementById('btnLogin');
const modalLogin = document.getElementById('modal-login');

btnLogin.addEventListener('click', () => {
    backLogin.classList.toggle('overlay-visible');
    modalLogin.classList.toggle('modal-visible') ;
});


const btnSignup = document.getElementById('btnSignup');
const modalSignUp = document.getElementById('modal-signup');

btnSignup.addEventListener('click', () => {
    backSignup.classList.toggle('overlay-visible');
    modalSignUp.classList.toggle('modal-visible') ;
});


backLogin.addEventListener('click', () => {
    modalLogin.classList.toggle('modal-visible');
    backLogin.classList.toggle('overlay-visible');
});

backSignup.addEventListener('click', () => {
    modalSignUp.classList.toggle('modal-visible');
    backSignup.classList.toggle('overlay-visible');
});