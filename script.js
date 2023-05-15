const menuHamburguer = document.querySelector('.hamburguer-menu');

const menu = document.querySelector('.menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('ativo');
})