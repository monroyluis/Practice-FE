// const year = document.getElementById('#current-year');
// document.getElementById("current-year").innerHTML = new Date().getFullYear();

const menuEmail = document.querySelector (".navbar-email")
const desktopMenu = document.querySelector (".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu (){
  desktopMenu.classList.toggle("inactive")
}

