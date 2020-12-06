let btn = document.querySelector('.nav-btn'),
    menu = document.querySelector('.nav-menu'),
    menuItems = document.querySelectorAll('.nav-menu__item');

btn.addEventListener("click", function(e) {
    btn.classList.toggle('nav-btn--active');
    menu.classList.toggle('nav-menu--active');
    menuItems.classList.toggle('nav-menu--active');
    
});