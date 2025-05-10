const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

function goToSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - n)}%)`;
  });
}

function increaseIndex() {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
}

function decreaseIndex() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
}

// Handlers

function handleClickSlider(ev) {
  if (ev.target.closest(".btn--prev")) {
    decreaseIndex();
  } else if (ev.target.closest(".btn--next")) {
    increaseIndex();
  }
  goToSlide(index);
}

function handleWheelSlider(ev) {
  if (ev.deltaY < 0) {
    decreaseIndex();
  } else if (ev.deltaY > 0) {
    increaseIndex();
  }
  goToSlide(index);
}

function handleKeypress(ev) {
  const key = ev.key;
  if (key === "ArrowLeft") {
    decreaseIndex();
  } else if (key === "ArrowRight") {
    increaseIndex();
  } else {
    return;
  }
  goToSlide(index);
}

//////////////////////

function init() {
  goToSlide(index);
  slider.addEventListener("click", handleClickSlider);
  slider.addEventListener("wheel", handleWheelSlider);
  document.addEventListener("keydown", handleKeypress);

  setTimeout(function () {
    slider.style.opacity = 1;
  }, 500);
}
init();
