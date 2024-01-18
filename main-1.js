// main-1.js

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementById("slideshow-container1").getElementsByClassName("mySlides1");

  if (n > slides.length) { slideIndex1 = 1; }
  if (n < 1) { slideIndex1 = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex1 - 1].style.display = "block";
}
