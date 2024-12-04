// Función para manejar el sidebar
function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainContent = document.querySelector('.main-content');
    
    if (!sidebar || !hamburgerBtn) return;
    
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        hamburgerBtn.classList.toggle('active');
    }
    
    hamburgerBtn.addEventListener('click', toggleSidebar);
    
    // Cerrar sidebar al hacer clic fuera de él en dispositivos móviles
    document.addEventListener('click', (e) => {
        const isMobile = window.innerWidth < 1024;
        const clickedOutsideSidebar = !sidebar.contains(e.target);
        const clickedOutsideHamburger = !hamburgerBtn.contains(e.target);
        
        if (isMobile && clickedOutsideSidebar && clickedOutsideHamburger && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });
    
    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            sidebar.classList.remove('open');
            hamburgerBtn.classList.remove('active');
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeSidebar);