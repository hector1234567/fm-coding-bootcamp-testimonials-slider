const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

function handleClickSlider(ev) {
  if (ev.target.closest(".btn--prev")) {
    if (index > 0) {
      index--;
    } else {
      index = slides.length - 1;
    }
  } else if (ev.target.closest(".btn--next")) {
    if (index < slides.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }
  goToSlide(index);
}

function goToSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - n)}%)`;
  });
}

function init() {
  goToSlide(index);
  slider.addEventListener("click", handleClickSlider);
}
init();
