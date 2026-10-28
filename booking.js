const menuButton =
document.getElementById("menu-toggle");
const navMenu = 
document.getElementById("nav-menu");
if (menuButton && navMenu) {
 menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("active");
  
 });
}
