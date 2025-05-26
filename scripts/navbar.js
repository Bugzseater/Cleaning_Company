document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        // Desktop services dropdown
        const servicesBtn = document.getElementById('desktop-services-btn');
        const servicesDropdown = document.getElementById('desktop-services-dropdown');
        if (servicesBtn && servicesDropdown) {
            servicesBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                servicesDropdown.classList.toggle('hidden');
            });
            document.addEventListener('click', function(e) {
                if (!servicesDropdown.classList.contains('hidden')) {
                    servicesDropdown.classList.add('hidden');
                }
            });
            servicesDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });