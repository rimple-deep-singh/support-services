// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');
    this.classList.toggle('active');
});

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage || (currentPage === 'index.html' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
    }
});