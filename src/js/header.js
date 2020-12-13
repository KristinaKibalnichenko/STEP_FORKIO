let btn = document.querySelector(".nav-burger"),
  menu = document.querySelector(".nav-menu"),
  menuItems = document.querySelector(".nav-menu__item");

const toggleMenu = function() {
  btn.classList.toggle("nav-burger--active");
  menu.classList.toggle("nav-menu--active");
  menuItems.classList.toggle("nav-menu--active");
}

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btn;
  const menu_is_active = menu.classList.contains("nav-menu--active");
  
  if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
  }
});