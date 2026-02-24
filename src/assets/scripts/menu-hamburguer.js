const btnMenuHamburguer = document.getElementById('btn-menu-hamburguer');
const menu = document.getElementById('menu');


function abrirMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}