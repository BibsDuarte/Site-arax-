const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (i === idx) slide.classList.add("active");
  });
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});