const toggle = document.querySelector('.menu');
const nav = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});