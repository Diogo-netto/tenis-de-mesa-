document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os elementos que serão manipulados
    const hamburger = document.getElementById('hamburger-icon');
    const menu = document.getElementById('menu');
    
    // Opcional: Seleciona todos os links do menu para fechar ao clicar em um
    const menuLinks = menu.querySelectorAll('a');

    // 2. Adiciona um "ouvinte de evento" (event listener) ao ícone do hambúrguer
    hamburger.addEventListener('click', function() {
        // Alterna (adiciona/remove) a classe 'open' no ÍCONE e no MENU
        hamburger.classList.toggle('open');
        menu.classList.toggle('open');

        // Alterna o atributo ARIA para acessibilidade
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });
    
    // 3. Adiciona um "ouvinte de evento" para fechar o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'open' para fechar o menu e reverter o ícone
            hamburger.classList.remove('open');
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});