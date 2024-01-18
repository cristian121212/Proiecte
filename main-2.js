// main-2.js

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementById("slideshow-container2").getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex2 = 1; }
  if (n < 1) { slideIndex2 = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex2 - 1].style.display = "block";
}