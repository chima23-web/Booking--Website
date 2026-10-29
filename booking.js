const menuButton =
document.getElementById("menu-toggle");
const navMenu = 
document.getElementById("nav-menu");
if (menuButton && navMenu) {
 menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("active");
  
 });
}
const learnMoreButton = 
document.getElementById("learn-more");
if (learnMoreButton) {
 learnMoreButton.addEventListener("click", function() {
  window.location.href ="destination.html";
 });
}
