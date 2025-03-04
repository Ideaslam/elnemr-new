// Mobile Menu Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileToggler = document.querySelector('.mobile-nav__toggler');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const mobileMenuClose = document.querySelector('.mobile-menu__close');

//     // Open menu
//     mobileToggler.addEventListener('click', function(e) {
//         e.preventDefault();
//         mobileMenu.classList.add('active');
//         document.body.style.overflow = 'hidden'; // Prevent scrolling
//     });

//     // Close menu
//     mobileMenuClose.addEventListener('click', function() {
//         mobileMenu.classList.remove('active');
//         document.body.style.overflow = ''; // Restore scrolling
//     });

//     // Close menu when clicking outside
//     mobileMenu.addEventListener('click', function(e) {
//         if (e.target === mobileMenu) {
//             mobileMenu.classList.remove('active');
//             document.body.style.overflow = '';
//         }
//     });
// });
