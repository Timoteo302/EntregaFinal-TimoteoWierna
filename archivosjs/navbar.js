const toggleBtn = document.querySelector(".nav-toggle");
const contMenu = document.querySelector(".main-nav");
const navMenu = document.querySelector(".nav__menu")

toggleBtn.addEventListener("click", ()=>{
    contMenu.classList.toggle('open');
    navMenu.classList.toggle('openMenu');
})