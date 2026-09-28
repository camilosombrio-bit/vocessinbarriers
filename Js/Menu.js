/*======================================

VOCES SIN BARRERAS

MENU.JS

=======================================*/

//==============================
//
// ELEMENTOS
//
//==============================

const menu = document.querySelector(".menu");

const menuButton = document.getElementById("menuButton");

const header = document.querySelector("header");

//==============================
//
// MENÚ RESPONSIVE
//
//==============================

if(menuButton){

menuButton.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}

//==============================
//
// CERRAR MENÚ
//
//==============================

document.querySelectorAll(".menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

//==============================
//
// HEADER AL HACER SCROLL
//
//==============================

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});