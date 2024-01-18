// main-3.js

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementById("slideshow-container3").getElementsByClassName("mySlides2");

  if (n > slides.length) { slideIndex3 = 1; }
  if (n < 1) { slideIndex3 = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex3 - 1].style.display = "block";
}
