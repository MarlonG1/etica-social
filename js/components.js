document.addEventListener('DOMContentLoaded', function() {
    // Load the navigation bar
    loadNavbar();

    // Load the footer
    loadFooter();
});

function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    const navbarContent = `
        <div class="container nav-container">
            <ul class="nav-links">
                <li><a href="index.html"><i class="fas fa-home"></i> Inicio</a></li>
                <li><a href="views/chapter1.html"><i class="fas fa-bible"></i> Capítulo 1</a></li>
                <li><a href="views/homicide-suicide.html"><i class="fa-solid fa-skull"></i></i> Homicidio y Suicidio</a></li>
                <li><a href="views/theological-foundations.html"><i class="fas fa-church"></i> Fundamentos</a></li>
                <li><a href="views/immorality.html"><i class="fas fa-balance-scale"></i> Inmoralidad</a></li>
                <li><a href="views/el-salvador.html"><i class="fas fa-globe-americas"></i> El Salvador</a></li>
                <li><a href="views/solutions.html"><i class="fas fa-hands-helping"></i> Soluciones</a></li>
                <li><a href="views/resources.html"><i class="fas fa-book"></i> Recursos</a></li>
            </ul>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    `;

    // Check if we're in a subdirectory and adjust links accordingly
    const isInSubdirectory = window.location.pathname.includes('/views/');
    const adjustedNavbarContent = isInSubdirectory
        ? navbarContent.replace(/href="index.html"/g, 'href="../index.html"')
            .replace(/href="views\//g, 'href="')
        : navbarContent;

    navbarContainer.innerHTML = adjustedNavbarContent;

    // Add event listeners to the hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('fa-times');
            });
        });
    }
}

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    const isInSubdirectory = window.location.pathname.includes('/views/');
    const indexPath = isInSubdirectory ? "../index.html" : "index.html";
    const viewsPath = isInSubdirectory ? "" : "views/";

    const footerContent = `
        <div class="container footer-content">
            <div class="footer-column">
                <h3>Sobre este sitio</h3>
                <p>Análisis del Capítulo 1 de la Evangelium Vitae sobre homicidio y suicidio en El Salvador.</p>
            </div>
            <div class="footer-column">
                <h3>Enlaces rápidos</h3>
                <ul>
                    <li><a href="${indexPath}">Introducción</a></li>
                    <li><a href="${viewsPath}chapter1.html">Capítulo 1</a></li>
                    <li><a href="${viewsPath}homicide-suicide.html">Homicidio y Suicidio</a></li>
                    <li><a href="${viewsPath}theological-foundations.html">Fundamentos Teológicos</a></li>
                    <li><a href="${viewsPath}immorality.html">Inmoralidad</a></li>
                    <li><a href="${viewsPath}el-salvador.html">El Salvador</a></li>
                    <li><a href="${viewsPath}solutions.html">Soluciones</a></li>
                    <li><a href="${viewsPath}resources.html">Recursos</a></li>
                </ul>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerContent;
}