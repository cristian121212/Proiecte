document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.main-frame_image');
  var currentIndex = 0; // Start with the first image
  var delay = 5000; // Delay in milliseconds (5000ms = 5 seconds)
  
  // Function to show the current image and hide others
  function showCurrentImage() {
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add('visible');
      } else {
        img.classList.remove('visible');
      }
    });
  }
  
  // Initially show the first image
  showCurrentImage();
  
  setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back after the last
    showCurrentImage();
  }, delay);
});