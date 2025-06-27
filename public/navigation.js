const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});