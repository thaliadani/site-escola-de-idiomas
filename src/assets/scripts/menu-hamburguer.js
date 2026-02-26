function abrirMenu() {
    const menu = document.getElementById('menu');
    const body = document.body;

    menu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

document.querySelectorAll('#menu li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('ativo');
        document.body.style.overflow = 'auto';
    });
});
