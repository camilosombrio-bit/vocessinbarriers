/*======================================

VOCES SIN BARRERAS

DARKMODE.JS

=======================================*/

//==============================
//
// ELEMENTOS
//
//==============================

const darkButton = document.getElementById("darkModeButton");

const body = document.body;

//==============================
//
// CARGAR PREFERENCIA
//
//==============================

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    body.classList.add("dark");

    if(darkButton){

        darkButton.innerHTML = '<i class="fas fa-sun"></i>';

    }

}

//==============================
//
// CAMBIAR TEMA
//
//==============================

if(darkButton){

darkButton.addEventListener("click",()=>{

body.classList.toggle("dark");

const dark = body.classList.contains("dark");

localStorage.setItem("theme",dark ? "dark" : "light");

darkButton.innerHTML = dark

? '<i class="fas fa-sun"></i>'

: '<i class="fas fa-moon"></i>';

});

}