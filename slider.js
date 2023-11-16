// Get references to HTML elements
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Initialize slider state
let slideIndex = 0;

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
});

// Function to update the slider
function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Event listener for arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlider();
  } else if (event.key === 'ArrowRight') {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlider();
  }
});