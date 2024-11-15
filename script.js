document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header__menu");
    const nav = document.querySelector(".banner__nav");
  
    menu.addEventListener("click", function(){
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    })
   
  });
  
