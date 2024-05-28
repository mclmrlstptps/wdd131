const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');


menuToggle.addEventListener('click', ()=> {
    console.log("hello")
    nav.classList.toggle('show');
});