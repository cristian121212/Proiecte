document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;
  let sliding = false;
  let slideInterval;
  let slideTimer;
  let startX, currentX;

  function showSlide(slideIndex) {
    if (sliding || slideIndex === currentSlide) return;

    sliding = true;
    clearTimeout(slideTimer);

    const prevSlide = slides[currentSlide];
    const newSlide = slides[slideIndex];

    const direction = getSlideDirection(slideIndex);

    prevSlide.style.transform = `translateX(${direction * -100}%)`;
    newSlide.style.transform = `translateX(${direction * 0}%)`;

    prevSlide.style.transition = "transform 1s ease-in-out";
    newSlide.style.transition = "transform 1s ease-in-out";

    const transitionEndHandler = () => {
      prevSlide.classList.remove("active");
      prevSlide.style.transform = "-100%";
      prevSlide.style.transition = "";

      newSlide.style.transform = "translateX(0)";
      newSlide.style.transition = "transform 0.4s ease-in-out";
      newSlide.classList.add("active");

      const newSlideTransitionEndHandler = () => {
        newSlide.style.transform = "";
        newSlide.style.transition = "";
        sliding = false;
        currentSlide = slideIndex;
        newSlide.removeEventListener("transitionend", newSlideTransitionEndHandler);

        startSlideInterval();
      };

      newSlide.addEventListener("transitionend", newSlideTransitionEndHandler, { once: true });
    };

    prevSlide.addEventListener("transitionend", transitionEndHandler, { once: true });
  }

  function getSlideDirection(slideIndex) {
    if (slideIndex > currentSlide) {
      return 1;
    } else if (slideIndex < currentSlide) {
      return -1;
    } else {
      return 0;
    }
  }

  function nextSlide() {
    const nextSlideIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextSlideIndex);
  }

  function prevSlide() {
    const prevSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prevSlideIndex);
  }

  function startSlideInterval() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(nextSlide, 6000);
  }

  const draggableElement = document.getElementById("myDraggable");

  draggableElement.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  document.addEventListener("mousemove", (e) => {
    if (!startX) return;

    currentX = e.clientX;

    const threshold = 50;
    if (currentX - startX > threshold) {
      prevSlide();
      startX = null;
    } else if (startX - currentX > threshold) {
      nextSlide();
      startX = null;
    }
  });

  startSlideInterval();
});
