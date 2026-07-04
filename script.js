//alert("Selamat datang di Website NILLA.CRAFT!");

function sapa(){
    //alert("Halo, saya siap membantu membuat website untuk Anda.");
}

const tombol = document.getElementById("darkModeBtn");

tombol.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});

const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function(){

    fadeElements.forEach(function(element){

        const posisi = element.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if(posisi < tinggiLayar - 100){
            element.classList.add("show");
        }

    });

});

window.dispatchEvent(new Event("scroll"));