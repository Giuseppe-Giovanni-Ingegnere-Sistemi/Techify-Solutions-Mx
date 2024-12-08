// NAVBAR

document.addEventListener('DOMContentLoaded', (event) => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navActions.classList.toggle('active');
    });

    // Cerrar el menú móvil cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                navActions.classList.remove('active');
            }
        });
    });

    // Funcionalidad para el selector de idiomas
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el menú de idiomas cuando se hace clic fuera de él
    document.addEventListener('click', () => {
        langDropdown.style.display = 'none';
    });

    // Prevenir que el menú de idiomas se cierre al hacer clic dentro de él
    langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


// FIN NAVABAR




// VENTANA EMERGENTE

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Mostrar el popup cuando se carga la página
  window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
  }
  
// FIN VENTANA EMERGENTE