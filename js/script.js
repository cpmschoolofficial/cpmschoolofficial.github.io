// MENU
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

// AUTO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide(){
  index++;
  if(index >= slides.length){
    index = 0;
  }
  showSlide(index);
}

// AUTO PLAY
setInterval(nextSlide, 4000);
